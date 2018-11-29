import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs';

import { map, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';

import { ErrorHandlerService } from './error-handler.service';

import { Recipe } from '../models';

import { LiquidService } from './liquid.service';
import { PumpService } from './pump.service';

import {
    CacheService,
    Cache
} from './cache.service';

@Injectable()
export class RecipeService {
    private cache: Cache<any>;
    
    constructor(
        private errorHandler: ErrorHandlerService,
        private cacheService: CacheService,
        private liquidService: LiquidService,
        private pumpService: PumpService,
        private http: HttpClient) {

        this.cache = this.cacheService.initializeService<string>(this);
    }

    GetRecipes(): Observable<Recipe[]> {
        const id = 'GetRecipes';

        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            responseType: 'text' as 'json'
        };

        return this.cache.apply(id, this.http.get(environment.api + 'recipes', options)
                    .pipe(
                        map((result) => JSON.parse(<string> result)['result'] as Recipe[]),
                        tap(
                            data => {  },
                            error => this.errorHandler.HandleError(error, null)
                        )
                    ));
    }
}
