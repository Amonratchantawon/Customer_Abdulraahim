import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import { tokenNotExpired } from 'angular2-jwt';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  token: string;
  tokenIsNotExpired: boolean = false;
  constructor(public local: Storage) {
    this.local.get('token').then(res => {
      this.token = res;
      this.tokenIsNotExpired = tokenNotExpired(null, this.token)
    });
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.tokenIsNotExpired) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      });
    }

    return next.handle(request);
  }
}