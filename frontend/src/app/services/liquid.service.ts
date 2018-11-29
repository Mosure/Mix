import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs';

import { filter, switchMap, map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

import { ErrorHandlerService } from './error-handler.service';

import { Liquid, LiquidType } from '../models';
import { PumpService } from './pump.service';

import {
    CacheService,
    Cache
} from './cache.service';

@Injectable()
export class LiquidService {
    private cache: Cache<any>;

    constructor(
        private errorHandler: ErrorHandlerService,
        private cacheService: CacheService,
        private pumpService: PumpService,
        private http: HttpClient) {

        this.cache = this.cacheService.initializeService<string>(this);
    }

    GetLiquids(type: LiquidType = null): Observable<Liquid[]> {
        const id = 'GetLiquids';

        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: 'text' as 'json'
        };

        return this.cache.apply(id, this.http.get(environment.api + 'liquids', options)
                    .pipe(
                        map((result) => JSON.parse(<string> result)['result'] as Liquid[]),
                        tap(
                            data => {  },
                            error => this.errorHandler.HandleError(error, null)
                        )
                    ));
    }

    GetActiveLiquids(liquidType: LiquidType = null): Liquid[] {
        const pumps = this.pumpService.GetActivePumps(liquidType);

        let toReturn = [];

        for (const pump of pumps) {
            if (!toReturn.find(p => p.name === pump.liquid.name)) {
                toReturn.push(pump.liquid);
            }
        }

        return toReturn;
    }
}
