import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import html2canvas from 'html2canvas';
import * as jspdf from 'jspdf';
import { Employee } from '../employee.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-vacancy-detail',
  templateUrl: './vacancy-detail.component.html',
  styleUrls: ['./vacancy-detail.component.scss'],
})
export class VacancyDetailComponent implements OnInit {

  // public empId: number;

  public employeeDetails: Employee;
  constructor (private route: ActivatedRoute, private service: EmployeeService) { }

  public ngOnInit (): void {
    // this.empId = this.route.snapshot.params.id;
    // console.log('empid', this.empId);
    this.getData();
  }

  // public getData (empId: number): void {
  //   this.service.getEmployeeById(empId).subscribe((res: Employee) => {
  //     console.log('res--', res);
  //     this.employeeDetails = res;
  //   });
  // }

  public getData (): void {
    this.service.getData().subscribe((res: Employee) => {
      console.log('res--', res);
      this.employeeDetails = res;
    });
  }

  public printScreen (): void {
    const data: HTMLElement = document.getElementById('contentToConvert');
    html2canvas(data).then((canvas: HTMLCanvasElement) => {
      // Few necessary setting options
      const imgWidth: number = 208;
      const pageHeight: number = 295;
      const imgHeight: number = canvas.height * imgWidth / canvas.width;
      const heightLeft: number = imgHeight;

      const contentDataURL: string = canvas.toDataURL('image/png');
      const pdf: jspdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
      const position: number = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('MYPdf.pdf'); // Generated PDF
    });
  }

}
