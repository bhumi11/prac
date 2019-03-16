import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/';
import { Employee } from '../employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  public baseUrl: string = 'http://localhost:3000/Employee';

  public updateSubject: BehaviorSubject<Employee> = new BehaviorSubject(new Employee());

  constructor (private http: HttpClient) { }

  public sendData (data: Employee): void {
    this.updateSubject.next(data);
  }

  public getData (): Observable<Employee> {
    return this.updateSubject.asObservable();
  }

  public getAllEmployee (): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  public insertEmployee (employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  public updateEmployee (employee: Employee, id: number): Observable<Employee> {
    return this.http.put<Employee>(this.baseUrl + '/' + id, employee);
  }

  public deleteEmployee (id: number): Observable<Employee> {
    return this.http.delete<Employee>(this.baseUrl + '/' + id);
  }

  public getEmployeeById (id: number): Observable<Employee> {
    return this.http.get<Employee>(this.baseUrl + '/' + id);
  }
}
