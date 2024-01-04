import { Component } from '@angular/core';
import { Employee } from '../type-script-demo/type-script-demo.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
employee:Employee = new Employee();

submit(f: NgForm){
  if(f.invalid){
    debugger
    return;
  }
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.employee))
}
}
