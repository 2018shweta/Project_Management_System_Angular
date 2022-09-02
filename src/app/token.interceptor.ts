import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authToken="1234567890123456"
    console.log(authToken)
  //  const modifiedReq=request.clone({headers:request.headers.set("authToken",authToken)})
   
  //   return next.handle(request);
    
    return next.handle(request.clone({ setHeaders: { authToken } }));

  }
}
