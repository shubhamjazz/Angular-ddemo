import { Component } from '@angular/core';
import { Employee } from '../type-script-demo/type-script-demo.component';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent {
  date: Date =new Date();
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

  sortArray: number[] =[1,2,3,4,5]
  addNumber(){
    this.sortArray.push(6)
  }
}
