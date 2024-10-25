import { Routes } from '@angular/router';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { Menu1Component } from './menu1/menu1.component';
import { Menu2Component } from './menu2/menu2.component';
import { Submenu11Component } from './menu1/submenu11/submenu11.component';
import { Submenu12Component } from './menu1/submenu12/submenu12.component';
import { Submenu21Component } from './menu2/submenu21/submenu21.component';
import { Submenu22Component } from './menu2/submenu22/submenu22.component';

export const APP_Routes: Routes = [
  {
    path: 'menu',
    component: LeftMenuComponent,
    children: [
      { path: 'menu1', component: Menu1Component },

      { path: 'menu1/submenu1.1', component: Submenu11Component },
      { path: 'menu1/submenu1.2', component: Submenu12Component },

      { path: 'menu2', component: Menu2Component },
      { path: 'menu2/submenu2.1', component: Submenu21Component },
      { path: 'menu2/submenu2.2', component: Submenu22Component },
      
    ],
  },
  { path: '', redirectTo: '/menu', pathMatch: 'full' },
];