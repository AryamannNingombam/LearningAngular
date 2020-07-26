import {HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';


export class AuthInterceptorService implements HttpInterceptor{
intercept(request : HttpRequest<any>,next : HttpHandler){

    const modifiedReq = request.clone({headers : request.headers.append('test','this is a test')})
    console.log('Request is on its way');
    return next.handle(modifiedReq)
}


}