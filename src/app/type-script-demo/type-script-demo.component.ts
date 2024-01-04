import { Component } from '@angular/core';

@Component({
  selector: 'app-type-script-demo',
  templateUrl: './type-script-demo.component.html',
  styleUrls: ['./type-script-demo.component.scss']
})
export class TypeScriptDemoComponent {
  employee:Employee = new Employee('1', 'shubham','Yavatmal')
  employeeArr: Employee[] =[
    {
      id:'1',
      city: 'pune'
    },
    {
      id:'2'
    },
    {
      id:'3'
    }
  ];
}

export class Employee{

  id?:string
  name?:string
  username?:string
  password?:string
  city?:string
  phone?:string
  children?: Employee[] = []

  constructor(
  id?:string,
  name?:string,
  city?:string,
  phone?:string
  ){
    this.id =id;
    this.city =city;
    this.name = name;
    this.phone = phone;
  }
}
