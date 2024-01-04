import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingDemoComponent } from './data-binding-demo.component';

const routes: Routes =[
{
  path:'',component:DataBindingDemoComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
  })
export class DataBindingDemoRoutingModule { }
