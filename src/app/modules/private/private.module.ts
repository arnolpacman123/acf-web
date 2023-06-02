import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './components/private/private.component';
import { TablerIconsModule } from "angular-tabler-icons";
import { AngularMaterialModule } from "@app/angular-material.module";
import { SidebarComponent } from './components/private/sidebar/sidebar.component';
import { NavItemComponent } from "@private/components/private/sidebar/nav-item/nav-item.component";
import { BrandingComponent } from './components/private/sidebar/branding/branding.component';
import { HeaderComponent } from './components/private/header/header.component';
import { ChampionshipsComponent } from './pages/championships/championships.component';
import { FormsModule } from "@angular/forms";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AcfDataService } from './services/acf.data.service';
import { CardComponent } from './components/card/card.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { NewElementCardComponent } from './components/new-element-card/new-element-card.component';
import { NewChampionshipComponent } from './components/new-championship/new-championship.component';
import { ChampionshipComponent } from './pages/championship/championship.component';


@NgModule({
  declarations: [
    PrivateComponent,
    SidebarComponent,
    NavItemComponent,
    BrandingComponent,
    HeaderComponent,
    ChampionshipsComponent,
    DashboardComponent,
    CardComponent,
    NoimagePipe,
    NewElementCardComponent,
    NewChampionshipComponent,
    ChampionshipComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    AngularMaterialModule,
    TablerIconsModule,
    FormsModule,
  ],
  providers: [
    AcfDataService
  ],
})
export class PrivateModule {
}
