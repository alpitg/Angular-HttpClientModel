import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable()
export class DataInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ):
    Observable<HttpEvent<any>> {

    //METHOD: GET, POST, PUT, DELETE-------------------------------------->
    //GET
    if (req.method === 'GET') {
      req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
      console.log('Get hit ---->' + req.method);
      return next.handle(req);
    }

    //POST
    if (req.method === 'POST') {
      req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
      console.log('Get hit ---->' + req.method);
      return next.handle(req);
    }

    //PUT
    if (req.method === 'PUT') {
      console.log('Get hit ---->' + req.method);
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
      return next.handle(req);
    }

    //DELETE
    if (req.method === 'DELETE') {
      console.log('Get hit ---->' + req.method);
      return next.handle(req);
    }
    //METHOD: GET, POST, PUT, DELETE-------------------------------------->

    //Default
    req = req.clone({ headers: req.headers.set('Accept', 'application/json').append('Access-Control-Allow-Credentials', 'true') });
    return next.handle(req);

    //HEADER---------------------------------------------->
    // if (!req.headers.has('Content-Type')) {
    //   req = req.clone({ headers: req.headers.set('Content-Type', 'application/json').append('Access-Control-Allow-Credentials', 'true') });
    // }

  }
}