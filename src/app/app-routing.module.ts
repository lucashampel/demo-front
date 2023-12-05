import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { TableAngularMaterialComponent } from './components/table-angular-material/table-angular-material.component';
import { InicialComponent } from './components/inicial/inicial.component';

const routes: Routes = [
  {
     path: 'teste', children: [
    { path: 'inicial', loadChildren: () => import('./components/demo.module').then(m => m.DemoModule), data: { breadcrumb: 'Início' } } ]
  },
  { path: 'heroes', component: HeroDetailComponent },
  { path: 'table', component: TableAngularMaterialComponent },
  {path: '**', component: InicialComponent, pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
