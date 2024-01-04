import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.scss']
})
export class DataBindingDemoComponent implements OnInit,AfterViewInit {

  helloworld:string[] =['helloworld'];
  twoway: string = 'test';
  propertyVar: string = 'text'
  isDisable: boolean = true
  clickMe(){
    this.isDisable =! this.isDisable
  }

  egString:string | undefined;
  egNumber!:number
  Boolean!:boolean
  egAny:any;

  egStringArray:string[] =['1','3','4'];
  egNumberArray:number[] =[1,2,4]
  egBooleanArray:boolean[]=[true,false,true]
  egAnyArray:any = [1,'3',true];
 
 
  constructor(){
    console.log("Hello from Constructor")
  }

  ngAfterViewInit(): void {
    this.egAny = 1;
    this.egAny ='test'
    console.log("Hello from AfterView")
    this.egStringArray.push('3')
    this.egNumberArray.splice(1,1,2)
    this.egNumberArray.splice(2,1,3)
    console.log(this.egNumberArray)

    var res = this.egStringArray.filter(x=> x=='1' || x=='3')
    console.log(res);

    this.egNumberArray.sort()
    console.log(this.egNumberArray)

    this.egStringArray.sort((x,y) => x.localeCompare(y))
    console.log(this.egStringArray)
  }

  ngOnInit(): void {
    
  }

}
