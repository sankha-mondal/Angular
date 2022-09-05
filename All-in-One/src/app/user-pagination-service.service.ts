import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserPaginationServiceService {

  constructor(private http: HttpClient) { }

  endPoint: string = "https://jsonplaceholder.typicode.com/todos";

  get_All_Data(): Observable<any> {
    return this.http.get(this.endPoint);
  }
}