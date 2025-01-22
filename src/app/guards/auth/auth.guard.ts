import { CanActivateFn } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);

  if(auth.isAuthenticated()){
    return true;
  }else{
    auth.navigateUrl('/login');
    return false;
  }

};
