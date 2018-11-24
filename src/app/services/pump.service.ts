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

@Injectable()
export class PumpService {
    private cache: Cache<any>;
    
    constructor(
        private errorHandler: ErrorHandlerService,
        private cacheService: CacheService,
        private http: HttpClient) {

        this.cache = this.cacheService.initializeService<string>(this);
    }

    GetAPIBuildNumber(): Observable<string> {
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

    GetAPIBuildURI(): Observable<string> {
        const id = 'Build URI :)';

        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: 'text' as 'json'
        };

        // Need to change the way caching is set by wrapping these requests in a cache
        return this.cache.apply(id, this.http.get(environment.api + 'status/build/uri', options)
                    .pipe(
                        map(result => result as string),
                        tap(
                            data => { },
                            error => this.errorHandler.HandleError(error, null)
                        )
                    ));
    }
}
