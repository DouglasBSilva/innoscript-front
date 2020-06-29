import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  private base_url = environment.baseUrl;
  private _url = '';
  constructor(private http: HttpClient) { }

  set url(url: string){
      this._url  = this.base_url + url;
  }

  public get(): Observable<any>{
    return this.http.get(this._url);
  }

  public update(): Observable<any>{
    return this.http.get(this._url);
  }

  public create(): Observable<any>{
    return this.http.get(this._url);
  }

  public delete(): Observable<any>{
    return this.http.get(this._url);
  }

}
