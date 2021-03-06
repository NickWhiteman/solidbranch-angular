import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ResponseQuery } from "../type/type";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  };

  getData(): Observable<ResponseQuery> {
    return this.http.get<ResponseQuery>(
      `${this._url}/getData`
    );
  };
} 
