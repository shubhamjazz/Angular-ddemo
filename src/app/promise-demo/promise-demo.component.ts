import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-demo',
  templateUrl: './promise-demo.component.html',
  styleUrls: ['./promise-demo.component.scss']
})
export class PromiseDemoComponent implements OnInit{
  ngOnInit(): void {
    const prom1 = new Promise((x, y) => { //its does not handle multiple events output 
      //x('Hello')                        //either x or y will be one output.  
      y('Error Occured')
    })

    prom1.then(x => {
      console.log(x)
    })
    .catch(x => {
      console.log(x)
    })
  }

}
