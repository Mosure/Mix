import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { find, filter, map, tap, switchMap, zip } from 'rxjs/operators';

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

    constructor(
        private errorHandler: ErrorHandlerService,
        private cacheService: CacheService,
        private liquidService: LiquidService,
        private http: HttpClient) {

        this.cache = this.cacheService.initializeService<string>(this);
    }
    
    GetPumps(): Observable<Pump[]> {
        const id = 'GetPumps';

        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: 'text' as 'json'
        };

        return this.cache.apply(id, this.http.get(environment.api + 'pumps', options)
                    .pipe(
                        map(result => JSON.parse(<string> result)['result'] as Pump[]),
                        tap(
                            data => { },
                            error => this.errorHandler.HandleError(error, null)
                        )
                    ));
    }

    GetPump(id: number): Pump {
        let toReturn: Pump;

        this.GetPumps().subscribe((result) => {
            toReturn = result.find(p => p.id === id);
        });

        return toReturn;
    }

    GetActivePumps(liquidType: LiquidType = null): Pump[] {
        const threshold = 0.1;

        let toReturn = [];

        this.GetPumps().subscribe((result) => {
            toReturn = result.filter(p => p.enabled && (liquidType ? p.liquid.type === liquidType : true) && p.level > 0);
        });

        return toReturn;
    }
}
