import { Component } from '@angular/core';
import { Employee } from '../type-script-demo/type-script-demo.component';

@Component({
  selector: 'app-derective-demo',
  templateUrl: './derective-demo.component.html',
  styleUrls: ['./derective-demo.component.scss']
})
export class DerectiveDemoComponent {
  employeeArr: Employee[] =[
    {
      id:'1',
      name:'ajay',
      city: 'pune',
      phone:'9828128108'
    },
    {
      id:'2',
      name:'dhurav',
      city: 'Mumbai',
      phone:'6822328145'
    },
    {
      id:'3',
      name:'ketan',
      city: 'Nagpur',
      phone:'7538128112'
    },
    {
      id:'4',
      name:'vaishali',
      city: 'pune',
      phone:'9828128108'
    },
    {
      id:'5',
      name:"mohit",
      city: "Mumbai",
      phone:"6822328145"
    },
    {
      id:'6',
      name:"shiva",
      city: "Nagpur",
      phone:"7538128112"
    }
  ];

  public day = new Date().getDay()
  public day2 = 7

  isDisabled: boolean = true
}


