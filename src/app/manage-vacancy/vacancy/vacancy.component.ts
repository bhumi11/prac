import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VacancyComponent {

  @Input() public employeeData: Employee[];
  @Input() public fieldName: string;
  @Output() public deleteData: EventEmitter<number> = new EventEmitter<number>();
  @Output() public updateData: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() public printData: EventEmitter<Employee> = new EventEmitter<Employee>();
  // @Input() public searchFilter: string;
  @Input() public searchText: string;
  constructor () {
    console.log('field', this.fieldName);

  }
  // public ngOnInit () {
  // }

  public deleteEmpData (id: number): void {
    this.deleteData.emit(id);
  }

  public updateClick (employee: Employee): void {
    console.log('event', event);

    this.updateData.emit(employee);
  }

  public printClick (employee: Employee): void {
    console.log('data', employee);

    this.printData.emit(employee);
  }
  // public identify(index, item: Employee[]): string {
  //   return item.id;
  // }
}
