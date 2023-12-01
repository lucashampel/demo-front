import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { InicialComponent } from './components/inicial/inicial.component';
import { HttpClientModule } from '@angular/common/http';
import { AppMenu } from './components/menu/menu.component';

@NgModule({
  declarations: [
    InicialComponent,
    AppMenu
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [InicialComponent, AppMenu]
})
export class AppModule { }
