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

@Injectable()
export class PumpService {
    private cache: Cache<any>;

    public threshold: number = 0.1;

    constructor(
        private errorHandler: ErrorHandlerService,
        private cacheService: CacheService,
        private http: HttpClient) {

        this.cache = this.cacheService.initializeService<string>(this);
    }

    HardwareEnabled(): Observable<boolean> {
        const id = 'HardwareEnabled'

        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: 'text' as 'json'
        };

        return this.cache.apply(id, this.http.get(environment.api + 'hardware_online', options)
                    .pipe(
                        map(result => JSON.parse(<string> result)['result'] as boolean),
                        tap(
                            _ => { },
                            error => this.errorHandler.HandleError(error, null)
                        )
                    ));
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
                            _ => { },
                            error => this.errorHandler.HandleError(error, null)
                        )
                    ));
    }

    GetActivePumps(liquidType: LiquidType = null): Observable<Pump[]> {
        return this.GetPumps().pipe(
            map(
                pumps => {
                    return pumps.filter(p => p.enabled && (liquidType ? p.liquid.type === liquidType : true) && p.level > 0);
                }
            )
        );
    }

    GetCombinedPump(liquid: Liquid): Observable<Pump> {
        return this.GetActivePumps(liquid.type).pipe(
            map(
                pumps => {
                    let newPump = new Pump();
                    newPump.liquid = liquid;
                    newPump.enabled = true;
                    newPump.level = 0;
                    newPump.volume = 0;

                    for (const pump of pumps) {
                        if (pump.liquid.name === liquid.name) {
                            newPump.hasCheckValve = newPump.hasCheckValve || pump.hasCheckValve;
                            newPump.level = newPump.level + pump.level;
                            newPump.volume = newPump.volume + pump.volume;
                        }
                    }

                    return newPump;
                }
            )
        );
    }

    UpdatePump(pump: Pump) {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };

        this.cache.invalidateAll();

        return this.http.put(environment.api + 'pumps/update', JSON.stringify(pump), options).subscribe(() => {});
    }

    GetLowPumps(): Observable<Pump[]> {
        return this.GetPumps().pipe(
            map(
                pumps => {
                    return pumps.filter(p => p.enabled && p.level / p.volume <= this.threshold);
                }
            )
        );
    }

    DispenseLiquid(pump_id: number) {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: 'text' as 'json'
        };

        return this.http.post(environment.api + 'dispense/' + pump_id, options)
                    .pipe(
                        tap(
                            _ => this.cache.invalidate('GetPumps'),
                            error => this.errorHandler.HandleError(error, null)
                        )
                    );
    }
}
