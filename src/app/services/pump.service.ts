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

import { Pump } from '../models/pump';

@Injectable()
export class PumpService {
    private cache: Cache<any>;

    pumps: Pump[];
    
    constructor(
        private errorHandler: ErrorHandlerService,
        private cacheService: CacheService,
        private http: HttpClient) {

        this.cache = this.cacheService.initializeService<string>(this);

        this.pumps = new Array<Pump>();

        let newPump = new Pump();
        newPump.level = 10;
        newPump.volume = 100;
        newPump.liquid = 'Sprite';
        newPump.id = '1';
        newPump.enabled = true;

        this.pumps.push(newPump);
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

    GetLowPumps() {
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
