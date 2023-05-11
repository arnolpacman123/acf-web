import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from "@private/components/private/private.component";
import { ChampionshipsComponent } from "@private/components/championships/championships.component";

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'championships',
        component: ChampionshipsComponent,
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
