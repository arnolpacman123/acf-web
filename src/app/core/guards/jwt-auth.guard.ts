import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from "@angular/router";
import { inject } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";

export namespace JwtAuthGuard {
  export const canActivate: CanActivateFn = (
    _: ActivatedRouteSnapshot,
    __: RouterStateSnapshot,
  ): boolean => {
    const router = inject(Router);
    const jwtHelperService = inject(JwtHelperService);

    if (jwtHelperService.isTokenExpired()) {
      router.navigate([ "./public" ]);
      return false;
    } else {
      return true;
    }
  };
}
