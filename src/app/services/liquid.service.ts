import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs';

import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

import { ErrorHandlerService } from './error-handler.service';

import { Liquid, LiquidType } from '../models';

import {
    CacheService,
    Cache
} from './cache.service';

@Injectable()
export class LiquidService {
    private cache: Cache<any>;

    private liquids: Liquid[];
    
    constructor(
        private errorHandler: ErrorHandlerService,
        private cacheService: CacheService,
        private http: HttpClient) {

        this.cache = this.cacheService.initializeService<string>(this);
    }

    GetLiquids(type: LiquidType = null): Observable<Liquid[]> {
        if (type) {

        }
        else {

        }


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

    GetLiquid(name: string): Observable<Liquid> {
        return null;
    }
}
