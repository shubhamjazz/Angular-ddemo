import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DerectiveDemoComponent } from './derective-demo.component';
import { DerectiveDemoRoutingModule } from './derective-demo-routing.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [DerectiveDemoComponent],
  imports: [
    CommonModule,
    DerectiveDemoRoutingModule,
    CoreModule
  ]
})
export class DerectiveDemoModule { }
