import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../core/employee.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.scss']
})
export class ServiceDemoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'city', 'phone','actions'];
  dataSource? :any;
  //dataSource : any --->if we dont know just above line.

  constructor(private empService: EmployeeService,private router: Router){}

  ngOnInit(): void {
    this.getEmployee()
  }

  getEmployee(){
    this.empService.getEmployees().subscribe(res =>{
      this.dataSource = res
    })
  }

  editEmployee(id:number){
    this.router.navigate(['/register',id])
  }

  deleteEmployee(id:number){
    this.empService.deleteEmployee(id).subscribe(res =>{
    this.getEmployee()
    })
  }
}
