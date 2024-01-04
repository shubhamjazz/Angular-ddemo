import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeScriptDemoComponent } from './type-script-demo/type-script-demo.component';
import { ServiceDemoComponent } from './service-demo/service-demo.component';
import { PipesDemomComponent } from './pipes-demom/pipes-demom.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { PromiseDemoComponent } from './promise-demo/promise-demo.component';
import { ParentDemoComponent } from './parent-demo/parent-demo.component';
import { MaterialDemoComponent } from './material-demo/material-demo.component';
import { FullLayoutComponent } from './design-layer/full-layout/full-layout.component';
import { BlankLayoutComponent } from './design-layer/blank-layout/blank-layout.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialCoreModule } from './core/material-core/material-core.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeScriptDemoComponent,
    ServiceDemoComponent,
    PipesDemomComponent,
    ObservableDemoComponent,
    PromiseDemoComponent,
    ParentDemoComponent,
    MaterialDemoComponent,
    FullLayoutComponent,
    BlankLayoutComponent,
    LoginComponent,
    TestComponent,
    PipeDemoComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialCoreModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
