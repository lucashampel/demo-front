import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';


import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { DemoRoutingModule } from "./demo-routing.module";

@NgModule({
    declarations: [
        HeroDetailComponent
    ],
    imports: [
      DemoRoutingModule,
      CommonModule,
    ]
  })
  export class DemoModule { }