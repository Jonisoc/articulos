import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'vista-articulo',
    loadChildren: () => import('./vista-articulo/vista-articulo.module').then( m => m.VistaArticuloPageModule)
  },
  {
    path: 'vista-carro',
    loadChildren: () => import('./vista-carro/vista-carro.module').then( m => m.VistaCarroPageModule)
  },
  {
    path: 'nuevo-articulo',
    loadChildren: () => import('./nuevo-articulo/nuevo-articulo.module').then( m => m.NuevoArticuloPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
