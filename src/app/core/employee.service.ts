import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../type-script-demo/type-script-demo.component';

const URL = 'http://localhost:3001/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  [x: string]: any;

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<any>{
    return this.http.get(URL);
  }

  getEmployee(id:number): Observable<any>{
    let new_URL =URL + '/' + id
    return this.http.get(new_URL);
  }

  addEmployees(employee: Employee): Observable<any>{
    return this.http.post(URL,employee);
  }

  updateEmployee(employee: Employee): Observable<any>{
    let new_URL =URL + '/' + employee.id
    return this.http.put(new_URL,employee);
  }

  deleteEmployee(id:number): Observable<any>{
    let new_URL =URL + '/' + id
    return this.http.delete(new_URL);
  }
}
