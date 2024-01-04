import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parent-demo',
  templateUrl: './parent-demo.component.html',
  styleUrls: ['./parent-demo.component.scss']
})
export class ParentDemoComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,  AfterViewInit, AfterViewChecked, OnDestroy {
  
  someVarParent:string ='parent sending to regular property';
  parentVar:string ='' 
  parentMethod(event: any){
    this.parentVar =event;
  }

  ngOnInit(): void {
    console.log('Hello from Parent OnInit')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Hello from Parent OnChanges')
  }
  ngDoCheck(): void {
    console.log('Hello from Parent DoCheck')
  }
  ngAfterContentInit(): void {
    console.log('Hello from Parent AfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('Hello from Parent AfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('Hello from Parent AfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('Hello from Parent AfterViewChecked')
  }
  ngOnDestroy(): void {
    console.log('Hello from Parent OnDestroy')
  }

  submit(){
    console.log('clicked')
  }
}

//@Input - it should be present in child component
//where parent will send data to child