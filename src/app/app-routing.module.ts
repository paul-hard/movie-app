import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/shared/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.routes').then(mod => mod.AUTH_ROUTES),
  },
  {
    path: '',
    loadChildren: () => import('./modules/cabinet/cabinet.routes').then(mod => mod.CABINET_ROUTES),

  },
  {
    path: '',
    loadChildren: () => import('./modules/main-page/main-page.routes').then(mod => mod.MAINE_ROUTES)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
