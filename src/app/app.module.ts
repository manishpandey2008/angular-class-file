import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { DirectiveComponent } from './directive/directive.component';
import { StyleDirectiveDirective } from './style-directive.directive';
import { TodoProjectComponent } from './todo-project/todo-project.component';
import { InputComponent } from './first-project/input/input.component';
import { SelectComponent } from './first-project/select/select.component';
import { TopNavComponent } from './first-project/top-nav/top-nav.component';
import { TableComponent } from './first-project/table/table.component';
import { ServiceTestComponent } from './service/service-test/service-test.component';
import { ServiceTest2Component } from './service/service-test2/service-test2.component';
import { BlogComponent } from './route/blog/blog.component';
import { PortfolioComponent } from './route/portfolio/portfolio.component';
import { AboutComponent } from './route/about/about.component';
import { ProfileComponent } from './route/profile/profile.component';
import { PageNotFoundComponent } from './route/page-not-found/page-not-found.component';
import { HomeChild1Component } from './route/home-child1/home-child1.component';
import { HomeChild2Component } from './route/home-child2/home-child2.component';
import { StudentFormComponent } from './forms/student-form/student-form.component';
import { FormSelectComponent } from './forms/form-components/form-select/form-select.component';
import { FormInputComponent } from './forms/form-components/form-input/form-input.component';
import { FormRadioComponent } from './forms/form-components/form-radio/form-radio.component';
import { FormCheckboxComponent } from './forms/form-components/form-checkbox/form-checkbox.component';
import { FormComponent } from './forms/form-components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Component1Component,
    Component2Component,
    DirectiveComponent,
    StyleDirectiveDirective,
    TodoProjectComponent,
    InputComponent,
    SelectComponent,
    TopNavComponent,
    TableComponent,
    ServiceTestComponent,
    ServiceTest2Component,
    BlogComponent,
    PortfolioComponent,
    AboutComponent,
    ProfileComponent,
    PageNotFoundComponent,
    HomeChild1Component,
    HomeChild2Component,
    StudentFormComponent,
    FormSelectComponent,
    FormInputComponent,
    FormRadioComponent,
    FormCheckboxComponent,
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
