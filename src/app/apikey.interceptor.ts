import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApikeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
   debugger;

   //return next.handle(request.clone({ setHeaders: { authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3OTgzNDk5NywiaWF0IjoxNjc5ODM0OTk3fQ.3jScfmxNEejgVU1fLsPMkSHZ317QxtaeRpMBgY258po`  }}));;
    return next.handle(request.clone({ setHeaders: { ApiKey: `98892426-b8d4-475a-ab19-ff9b0b0b305f`  }}));;
  }
}
