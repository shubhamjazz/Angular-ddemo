import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HightlightDirective } from './directives/hightlight.directive';
import { RupeePipe } from './pipes/rupee.pipe';
import { PureSortPipe } from './pipes/pure-sort.pipe';
import { ImpureSortPipe } from './pipes/impure-sort.pipe';
import { MaterialCoreModule } from './material-core/material-core.module';
import { FormsModule } from '@angular/forms';
import { DialogExampleComponent } from './components/dialog-example/dialog-example.component';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    HightlightDirective,
    RupeePipe,
    PureSortPipe,
    ImpureSortPipe,
    DialogExampleComponent,
  ],
  imports: [
    CommonModule,
    MaterialCoreModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports:[
    HightlightDirective,
    RupeePipe,
    PureSortPipe,
    ImpureSortPipe,
    DialogExampleComponent,
    FlexLayoutModule
  ]
})
export class CoreModule { }
