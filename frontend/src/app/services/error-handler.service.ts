import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs';

@Injectable()
export class ErrorHandlerService {

    hasError: boolean;
    errorMessage: string;

    constructor() {
    }

    HandleError(err: HttpResponse<any>, caught: any): void {
        console.log(err);
        console.log(caught);
        this.hasError = true;
        this.errorMessage = JSON.stringify(err) + ' : ' + JSON.stringify(caught);
    }

}
