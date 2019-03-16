import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from '../employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-vacancy',
  templateUrl: './add-vacancy.component.html',
  styleUrls: ['./add-vacancy.component.scss'],
})
export class AddVacancyComponent implements OnInit, OnDestroy {

  public employeeDetail: FormGroup;
  public submitted: boolean = false;
  // public empId: number;
  public editId: number;
  public domain: string[] = ['Angular', '.Net', 'QA', 'mobile', 'UI', 'java'];
  public default: string = 'Angular';
  public role: string[] = ['senior developer', 'junior developer', 'tester'];
  public subscription: Subscription;
  constructor (private empService: EmployeeService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
  }

  public ngOnInit (): void {
    this.employeeDetail = this.fb.group({
      jobTitle: ['', Validators.required],
      domain: ['', Validators.required],
      role: ['', Validators.required],
      type: ['', Validators.required],
      vacancies: ['', Validators.required],
      experiance: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.editId = this.route.snapshot.params.id;
    console.log('empid', this.editId);
    /* if (this.editId) {
      this.getEditData(this.editId);
    } */
    this.getEditData();

  }

  public getEditData (): void {
    this.subscription = this.empService.getData().subscribe((response: Employee) => {
      console.log('res--', response);
      this.employeeDetail.controls.jobTitle.setValue(response.jobTitle);
      this.employeeDetail.controls.domain.setValue(response.domain);
      this.employeeDetail.controls.role.setValue(response.role);
      this.employeeDetail.controls.type.setValue(response.type);
      this.employeeDetail.controls.vacancies.setValue(response.vacancies);
      this.employeeDetail.controls.experiance.setValue(response.experiance);
      this.employeeDetail.controls.description.setValue(response.description);
      this.editId = response.id;
      // this.employeeDetail = res;
    });
  }
  /* public getEditData (editId: number): void {
    this.empService.getEmployeeById(editId).subscribe((response: Employee) => {
      console.log('res--', response);
      this.employeeDetail.controls.jobTitle.setValue(response.jobTitle);
      this.employeeDetail.controls.domain.setValue(response.domain);
      this.employeeDetail.controls.role.setValue(response.role);
      this.employeeDetail.controls.type.setValue(response.type);
      this.employeeDetail.controls.vacancies.setValue(response.vacancies);
      this.employeeDetail.controls.experiance.setValue(response.experiance);
      this.employeeDetail.controls.description.setValue(response.description);
      // this.employeeDetail = res;
    });
  } */

  public onSubmit (): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.employeeDetail.invalid) {
      console.log('invalid');

      return;
    }
    if (this.editId) {
      console.log('id------', this.editId);
      this.empService.updateEmployee(this.employeeDetail.value, this.editId).subscribe((response: Employee) => {
        console.log('updated records', response);
        // this.getAllEmployees();
        // this.clearAll();
        this.router.navigateByUrl('/vacancy');
      });
    } else {
      console.log('id-----', this.editId);

      this.empService.insertEmployee(this.employeeDetail.value).subscribe((response: Employee) => {
        console.log('inserted records', response);
        // this.getAllEmployees();
        // this.clearAll();
        this.router.navigateByUrl('/vacancy');
      });
    }
  }

  public get formControls () {
    return this.employeeDetail.controls;
  }

  public ngOnDestroy (): void {
    this.subscription.unsubscribe();
  }

}
