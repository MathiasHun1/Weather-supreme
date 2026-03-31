import { Routes } from '@angular/router';
import {PageLayout} from './layouts/page-layout/page-layout';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/page-layout/page-layout').then(m => m.PageLayout),
    children: [
      {
        path: '',
        redirectTo: '/főoldal',
        pathMatch: 'full',
      },
      {
      path: 'főoldal',
      loadComponent: () => import('./pages/main-page/main-page').then(m => m.MainPage),
    }
    ],
  },
];
