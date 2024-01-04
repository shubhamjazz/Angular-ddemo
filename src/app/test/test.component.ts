import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,  AfterViewInit, AfterViewChecked, OnDestroy{
    
  @Input() childInput!:string;
  @Input() regularInput:string ='this is regular';

  @Output() childEvent:EventEmitter<string> =new EventEmitter<string>()

  childsubmit(){
    this.childEvent.emit('Button is clicked in childTest component')
  }

    ngOnInit(): void {
      console.log('--------------Hello from ChildTest OnInit')
    }
    ngOnChanges(): void {
      console.log('--------------Hello from ChildTest OnChanges')
    }
    ngDoCheck(): void {
      console.log('--------------Hello from ChildTest DoCheck')
    }
    ngAfterContentInit(): void {
      console.log('--------------Hello from ChildTest AfterContentInit')
    }
    ngAfterContentChecked(): void {
      console.log('--------------Hello from ChildTest AfterContentChecked')
    }
    ngAfterViewInit(): void {
      console.log('--------------Hello from ChildTest AfterViewInit')
    }
    ngAfterViewChecked(): void {
      console.log('--------------Hello from ChildTest AfterViewChecked')
    }
    ngOnDestroy(): void {
      console.log('--------------Hello from ChildTest OnDestroy')
    }
  
    submit(){
      console.log('clicked')
    }
}
