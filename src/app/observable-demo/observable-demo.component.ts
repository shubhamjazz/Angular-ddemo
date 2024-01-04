import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.scss']
})
export class ObservableDemoComponent implements OnInit {
  ngOnInit(): void {
    const obs1 = new Observable(x => {//observable emitting stream of event
      x.next(1);
      x.next('2')
      x.next(true)
      //x.error('error')
      x.next(5)
      x.complete()
      x.next(6)
    })
    obs1.subscribe(x => {
      console.log(x)
    },
    x =>{
      console.log(x)
    },
    () => {
      console.log('complete')
    }
    )
    
  }

}
