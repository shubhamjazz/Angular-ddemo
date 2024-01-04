import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DerectiveDemoComponent } from './derective-demo.component';

const routes: Routes =[
  {
    path:'',component:DerectiveDemoComponent
  }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports:[RouterModule]
    })
export class DerectiveDemoRoutingModule { }


