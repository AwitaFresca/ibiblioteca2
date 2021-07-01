import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IbibliotecaPage } from './ibiblioteca.page';

const routes: Routes = [
  {
    path: '',
    component: IbibliotecaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IbibliotecaPageRoutingModule {}
