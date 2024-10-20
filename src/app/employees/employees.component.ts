import { Component, inject, OnInit } from '@angular/core';
import { Employee } from '../model/employee';
import { EmployeeService } from '../service/employee.service';
import { EmployeeDbService } from '../employee/firesotre/employee-db.service';
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe, DatePipe } from '@angular/common';

@Component({
    selector: 'app-employees',
    templateUrl: './employees.component.html',
    styleUrls: ['./employees.component.css'],
    standalone: true,
    imports: [RouterLink, NgFor, AsyncPipe, DatePipe]
})
export class EmployeesComponent implements OnInit {
  // protected employees: EmployeeService = inject(EmployeeService);
  employees: Employee[] = [];
  private store: EmployeeDbService = inject(EmployeeDbService);

  ngOnInit(): void {
    this.store.getEmployees().subscribe(data => {
      this.employees = data.map(e => {
        return {
          ...e
        } as Employee;
      });
    });
  }


}
