import { Component, OnInit } from '@angular/core';

declare var window:any;
@Component({
  selector: 'app-flex-demo',
  templateUrl: './flex-demo.component.html',
  styleUrls: ['./flex-demo.component.scss']
})
export class FlexDemoComponent implements OnInit {
  formModal:any;


 ngOnInit(): void {
   this.formModal = new window.bootstrap.Modal(
    document.getElementById("exampleModal")
   );
 }

 openModal(){
  this.formModal.show();
 }

 doSomething(){
  this.formModal.hide();
 }

}
