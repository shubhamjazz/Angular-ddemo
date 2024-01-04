import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingDemoRoutingModule } from './data-binding-demo-routing.module';
import { DataBindingDemoComponent } from './data-binding-demo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DataBindingDemoComponent],
  imports: [
    CommonModule,
    DataBindingDemoRoutingModule,
    FormsModule
  ]
})
export class DataBindingDemoModule { }
