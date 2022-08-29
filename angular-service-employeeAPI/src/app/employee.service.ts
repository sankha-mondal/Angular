import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public http: HttpClient) { } // DI for HttPClient

  //  Used to show the data:
  loadEmployeeDetails(): Observable<Employee[]> {
    return this.http.get<Employee[]>("http://localhost:3000/employee");
  }

  // Used to store new data:
  storeEmployeeDetails(employee:Employee) {
    return this.http.post("http://localhost:3000/employee",employee);
  }
  

  
}
