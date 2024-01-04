import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

 const modules = [
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatInputModule,
  MatFormFieldModule,
  MatProgressBarModule,
  MatRadioModule,
  MatDialogModule,
  MatTableModule,
  MatIconModule
]


@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports:[
    ...modules
  ]
})
export class MaterialCoreModule { }
