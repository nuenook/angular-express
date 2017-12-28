import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  getAllposts(){
    const options = new JsonRequestOptions();
    return this.http.get('/api/posts', options).map(res => res.json());
  }
}

export class JsonRequestOptions extends RequestOptions {

  headers: Headers;

  constructor(authToken: string = null) {
      super();
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Access-Control-Allow-Origin', '*');
  }
}