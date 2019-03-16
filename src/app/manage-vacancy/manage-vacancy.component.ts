import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './employee.model';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-manage-vacancy',
  templateUrl: './manage-vacancy.component.html',
  styleUrls: ['./manage-vacancy.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageVacancyComponent implements OnInit {

  public employees: Employee[] = [];
  public empId: number;
  public list: string[] = ['jobTitle', 'domain', 'role', 'experiance'];
  public listVal: string;
  constructor (private empService: EmployeeService, private router: Router) { }

  public ngOnInit (): void {
    this.getAllEmployees();
  }

  public getAllEmployees (): void {
    this.empService.getAllEmployee().subscribe((response: Employee[]) => {
      console.log('res', response);
      this.employees = response;

    });
  }

  public delete (empId: number): void {
    console.log('data', empId);
    this.empService.deleteEmployee(empId).subscribe((response: Employee) => {
      this.getAllEmployees();
    });
  }

  public update (emp: Employee): void {
    this.empId = emp.id;
    console.log('in update parent', emp);
    console.log('id', this.empId);
    this.empService.sendData(emp);
    this.router.navigateByUrl('vacancy/edit');
  }

  public print (emp: Employee): void {
    console.log('print data', emp);

    this.empService.sendData(emp);
    this.router.navigateByUrl('vacancy/view-detail');
  }

}
