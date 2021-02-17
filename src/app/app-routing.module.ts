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
    path: 'geolocation',
    loadChildren: () => import('./geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },
  {
    path: 'mark-location',
    loadChildren: () => import('./mark-location/mark-location.module').then( m => m.MarkLocationPageModule)
  },
  {
    path: 'auto-complete',
    loadChildren: () => import('./auto-complete/auto-complete.module').then( m => m.AutoCompletePageModule)
  },
  {
    path: 'geo-direction',
    loadChildren: () => import('./geo-direction/geo-direction.module').then( m => m.GeoDirectionPageModule)
  },
  {
    path: 'get-direction',
    loadChildren: () => import('./get-direction/get-direction.module').then( m => m.GetDirectionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
