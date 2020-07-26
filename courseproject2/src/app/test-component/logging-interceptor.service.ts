
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http'

export class LoggingInterceptorService implements HttpInterceptor{
    intercept(request  : HttpRequest<any>,next : HttpHandler){
        if (request.method === 'POST'){
            console.log('POSTING');
        } else{
            console.log('GETTING');
        }
        return next.handle(request);
    }

}