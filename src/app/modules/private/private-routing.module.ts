import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from "@private/components/private/private.component";
import { ChampionshipsComponent } from "@private/components/championships/championships.component";
import { DashboardComponent } from "@private/components/dashboard/dashboard.component";
import { NewChampionComponent } from './components/new-champion/new-champion.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'championships',
        component: ChampionshipsComponent,
      },
      {  path: 'createchampion',
        component: NewChampionComponent,
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PrivateRoutingModule {
}
