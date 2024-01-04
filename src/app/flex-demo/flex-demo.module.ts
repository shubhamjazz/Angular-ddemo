import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexDemoComponent } from './flex-demo.component';
import { CoreModule } from '../core/core.module';
import { FlexDemoRoutingModule } from './flex-demo-routing.module';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [FlexDemoComponent],
  imports: [
    CommonModule,
    CoreModule,
    FlexDemoRoutingModule,
    FormsModule
  ]
})
export class FlexDemoModule { }
