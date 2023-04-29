import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TablerIconsModule } from "angular-tabler-icons";
import { AngularMaterialModule } from "@app/angular-material.module";
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { NavItemComponent } from "@private/components/dashboard/sidebar/nav-item/nav-item.component";
import { BrandingComponent } from './components/dashboard/sidebar/branding/branding.component';
import { HeaderComponent } from './components/dashboard/header/header.component';


@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    NavItemComponent,
    BrandingComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    AngularMaterialModule,
    TablerIconsModule,
  ]
})
export class PrivateModule {
}
