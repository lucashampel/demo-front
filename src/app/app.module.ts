import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { InicialComponent } from './components/inicial/inicial.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    InicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [InicialComponent]
})
export class AppModule { }
