import { JwtModuleOptions } from "@auth0/angular-jwt";

export const jwtOptions: JwtModuleOptions = {
  config: {
    tokenGetter: function tokenGetter() {
      return localStorage.getItem('access_token');
    },
    allowedDomains: [ '*' ],
  },
}
