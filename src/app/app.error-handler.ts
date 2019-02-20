import { HttpErrorResponse } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs/Observable';

export class ErrorHandler {
    static handleError(error: HttpErrorResponse | any) {
        let errorMessage:string
        if(error instanceof HttpErrorResponse) {
            const body = error.error
            errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText} ${body}`
        } else {
            errorMessage = error.toString()
        }
        console.log(errorMessage)
        return Observable.throw(errorMessage)
    }
}
