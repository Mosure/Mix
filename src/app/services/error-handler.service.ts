import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs';

@Injectable()
export class ErrorHandlerService {

    constructor() {
    }

    HandleError(err: HttpResponse<any>, caught: any): void {
        console.log(err);
        console.log(caught);
    }

}
