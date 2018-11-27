import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs';

import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

import { ErrorHandlerService } from './error-handler.service';

import {
    CacheService,
    Cache
} from './cache.service';

import { Pump, LiquidType, Liquid } from '../models';
import { LiquidService } from './liquid.service';

@Injectable()
export class PumpService {
    private cache: Cache<any>;

    pumps: Pump[];
    
    constructor(
        private errorHandler: ErrorHandlerService,
        private cacheService: CacheService,
        private liquidService: LiquidService,
        private http: HttpClient) {

        this.cache = this.cacheService.initializeService<string>(this);

        this.pumps = new Array<Pump>();

        let newPump = new Pump();
        newPump.level = 10;
        newPump.volume = 100;
        newPump.liquid = 'Sprite';
        newPump.id = 1;
        newPump.enabled = true;

        let newPump2 = new Pump();
        newPump2.level = 50;
        newPump2.volume = 100;
        newPump2.liquid = 'Vodka';
        newPump2.id = 2;
        newPump2.enabled = true;

        this.pumps.push(newPump);
        this.pumps.push(newPump2);
    }

    GetPump(id: number): Observable<Pump> | Pump {
        for (const pump of this.pumps) {
            if (pump.id === id) {
                return pump;
            }
        }

        return null;
    }

    GetActivePumps(liquidType: LiquidType = null): Observable<Pump[]> | Pump[] {
        return this.pumps.filter(p => {
            return p.enabled && (liquidType && this.liquidService.GetLiquid(p.liquid) ? (<Liquid> this.liquidService.GetLiquid(p.liquid)).type === liquidType : true) && p.level > 0;
        });

        const id = 'Build Number :)';

        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: 'text' as 'json'
        };

        return this.cache.apply(id, this.http.get(environment.api + 'status/build', options)
                    .pipe(
                        map(result => result as string),
                        tap(
                            data => {  },
                            error => this.errorHandler.HandleError(error, null)
                        )
                    ));
    }

    GetLowPumps(): Observable<Pump[]> | Pump[] {
        const threshold = 0.1;
        let toReturn = [];

        for (const pump of this.pumps) {
            if (pump.enabled && pump.level / pump.volume <= threshold) {
                toReturn.push(pump);
            }
        }

        return toReturn;
    }
}
