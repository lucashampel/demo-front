import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    
    { path: 'index', component: HeroDetailComponent },

    // { path: 'incluir', component: GerenciarFormularioComponent , data : {breadcrumb: 'Incluir', roles: [
    //   'NOTIFICADOR'
    // ] },canActivate: [AppKeycloakGuard]},

    // { path: 'editar/:id', component: HeroDetailComponent},

   ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule] 
  })
  export class DemoRoutingModule { }