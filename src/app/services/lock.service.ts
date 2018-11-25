import { Injectable } from '@angular/core';

import 'rxjs';

@Injectable()
export class LockService {

    private password: string;
    private locked: boolean;

    constructor() {
    }

    lock(password: string) {
        this.locked = true;
        this.password = password;
    }

    unlock(password: string): boolean {
        if (this.password === password) {
            this.locked = false;
        }
        return this.locked;
    }

    isLocked(): boolean {
        return this.locked;
    }
}
