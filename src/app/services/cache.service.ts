import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { shareReplay } from 'rxjs/operators';

@Injectable()
export class CacheService {
    private cacheMap: any;

    constructor() {
        this.cacheMap = {};
    }

    initializeService<T>(id: any): Cache<T> {
        this.cacheMap[id] = new Cache<T>();
        return this.cacheMap[id];
    }

    get<T>(id: any): Cache<T> {
        if (id in this.cacheMap) {
            return this.cacheMap[id];
        }
        return null;
    }
}

export class Cache<T> {
    private cache: any;

    constructor() {
        this.cache = {};
    }

    apply(id: any, source: Observable<T>): Observable<T> {
        if (!environment.useCaching) {
            return source;
        }

        if (!this.cache[id]) {
            this.cache[id] = source.pipe(
                shareReplay(1)
            );
        }

        return this.cache[id];
    }

    invalidate(id: any): void {
        if (!environment.production) {
            console.log('[Debug][Cache] Invalidated: ' + id);
        }

        if (this.cache[id]) {
            delete this.cache[id];
        }
    }

    invalidateAll(): void {
        if (!environment.production) {
            console.log('[Cache] Invalidated All');
        }

        this.cache = {};
    }
}
