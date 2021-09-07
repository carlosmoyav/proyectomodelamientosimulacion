import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tema1Component } from './tema1/tema1.component';
import { Tema2Component } from './tema2/tema2.component';
import { Tema3Component } from './tema3/tema3.component';
import { Tema4Component } from './tema4/tema4.component';
import { Tema5Component } from './tema5/tema5.component';
import { Tema6Component } from './tema6/tema6.component';
import { Tema7Component } from './tema7/tema7.component';

const routes: Routes = [
  {path: "tema1", component: Tema1Component},
  {path: "tema2", component: Tema2Component},
  {path: "tema3", component: Tema3Component},
  {path: "tema4", component: Tema4Component},
  {path: 'tema5', component: Tema5Component },
  {path: 'tema6', component: Tema6Component },
  {path: 'tema7', component: Tema7Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
