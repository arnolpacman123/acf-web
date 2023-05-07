import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "@public/services/auth.service";
import { AngularMaterialModule } from "@app/angular-material.module";

@NgModule({
  declarations: [
    LoginComponent
  ],
    imports: [
        CommonModule,
        PublicRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        AngularMaterialModule,
    ],
  providers: [
    AuthService,
  ],
})
export class PublicModule {
}
