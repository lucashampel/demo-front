import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { InicialComponent } from './components/inicial/inicial.component';
import { HttpClientModule } from '@angular/common/http';
import { AppMenu } from './components/menu/menu.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { AppComponent } from './app.component';
import { TableAngularMaterialComponent } from './components/table-angular-material/table-angular-material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';

@NgModule({
  declarations: [
    InicialComponent,
    AppMenu,
    AppComponent,
    TableAngularMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
