import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http'; import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const path: string = "http://127.0.0.1:3000"
const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

@Injectable()
export class ApiService {
  data: object
  constructor(
    private http: HttpClient
  ) { }


  toHttpParams(obj: Object): HttpParams {
    let params = new HttpParams();
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const val = obj[key];
        if (val !== null && val !== undefined) {
          params = params.append(key, val.toString());
        }
      }
    }
    return params;
  }

  getData(endpoint: string): Observable<any> {
    return this.http.get(path + endpoint)
  }

  postData(endpoint: string, Data: object): Observable<any> {
    var params = this.toHttpParams(Data)
    return this.http.post(path + endpoint, params.toString(),
      { headers }
    )
  }
  putData(endpoint: string, Data: object): Observable<any> {
    var params = this.toHttpParams(Data)
    return this.http.put(path + endpoint, params.toString(),
      { headers }
    )
  }
  deleteData(endpoint: string): Observable<any> {
    return this.http.delete(path + endpoint, { headers }
    )
  } 
}
