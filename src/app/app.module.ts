import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ModalModule, BsDatepickerModule, BsDropdownModule, CarouselModule } from 'ngx-bootstrap';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { DataService } from "./services/data.service";
import { DataInterceptor } from "./services/data-interceptor";

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  providers: [
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DataInterceptor,
      multi: true,
    },
    {
      provide: CarouselConfig,
      useValue: { interval: 1500, noPause: true }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
