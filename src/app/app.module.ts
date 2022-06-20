import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { DirectiveComponent } from './directive/directive.component';
import { StyleDirectiveDirective } from './style-directive.directive';
import { TodoProjectComponent } from './todo-project/todo-project.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Component1Component,
    Component2Component,
    DirectiveComponent,
    StyleDirectiveDirective,
    TodoProjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
