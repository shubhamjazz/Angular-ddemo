import { Component, OnInit } from '@angular/core';
import { Employee } from '../type-script-demo/type-script-demo.component';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../core/employee.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private routeSub!:Subscription;
  empId!:number

  constructor(private empService: EmployeeService,
    private router: Router,private route: ActivatedRoute){
      this.routeSub = this.route.params.subscribe(params => {
       this.empId = params['id'] //log the value of id
      });
    }
  ngOnInit(): void {
    if(this.empId){
      this.empService.getEmployee(this.empId).subscribe(res =>{
        this.employee = res
      })
    }
  }

  employee:Employee = new Employee();

  submit(f: NgForm){
    if(f.invalid){
      debugger
      return;
    }

    if(this.empId){
      //put api
      this.empService.updateEmployee(this.employee).subscribe(res => {
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.employee));
        this.router.navigate(['/service-demo']);
      })
    }else{
      //post api
    this.empService.addEmployees(this.employee).subscribe(res => {
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.employee));
      this.router.navigate(['/service-demo']);
    })
    }
  }
}
