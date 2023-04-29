import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from "@public/services/auth.service";
import { User } from "@models/interfaces";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
  providers: [ AuthService ],
})
export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleMobileFilterNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

  user!: User;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
  ) {
    this.user = this.authService.getLoggedUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate([ './public' ]);
  }
}

