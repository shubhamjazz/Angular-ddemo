import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeScriptDemoComponent } from './type-script-demo/type-script-demo.component';
import { DerectiveDemoComponent } from './derective-demo/derective-demo.component';
import { DataBindingDemoComponent } from './data-binding-demo/data-binding-demo.component';
import { FlexDemoComponent } from './flex-demo/flex-demo.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { ParentDemoComponent } from './parent-demo/parent-demo.component';
import { PipesDemomComponent } from './pipes-demom/pipes-demom.component';
import { PromiseDemoComponent } from './promise-demo/promise-demo.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { FullLayoutComponent } from './design-layer/full-layout/full-layout.component';
import { BlankLayoutComponent } from './design-layer/blank-layout/blank-layout.component';
import { LoginComponent } from './login/login.component';
import { DataBindingDemoModule } from './data-binding-demo/data-binding-demo.module';
import { DerectiveDemoModule } from './derective-demo/derective-demo.module';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:FullLayoutComponent,
   children:[
    {
      path:'type-script-demo',component:TypeScriptDemoComponent    
    },
    {
      path:'derective-demo',//component:DerectiveDemoComponent
      loadChildren: () => import('./derective-demo/derective-demo.module').then(x => DerectiveDemoModule)
    },
    {
      path:'data-binding-demo',//component:DataBindingDemoComponent
      loadChildren: () => import('./data-binding-demo/data-binding-demo.module').then(x => DataBindingDemoModule)
    },
    {
      path:'flex-demo',//component:FlexDemoComponent
      loadChildren: () =>import('./flex-demo/flex-demo.module').then(x=>x.FlexDemoModule)
    },
    {
      path:'material-demo',component:MaterialDemoComponent
    },
    {
      path:'pipe-demo',component:PipeDemoComponent
    },
    {
      path:'observable-demo',component:ObservableDemoComponent
    },
    {
      path:'parent-demo',component:ParentDemoComponent
    },
    {
      path:'promise-demo',component:PromiseDemoComponent
    },
    {
      path:'service-demo',component:ServiceDemoComponent
    }
   ]
  },
{
  path:'',component:BlankLayoutComponent,
  children:[
    {
      path:'login',component:LoginComponent
    },
    {
      path:'register',component:RegisterComponent
    },
    {
      path:'register/:id',component:RegisterComponent
    }
  ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
