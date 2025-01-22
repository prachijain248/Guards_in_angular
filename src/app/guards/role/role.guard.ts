import { CanActivateChildFn } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';

export const roleGuard: CanActivateChildFn = (childRoute, state) => {
  const auth = inject(AuthService);
  
  const reqrole = childRoute.data['role'];

  if(auth.hasRole(reqrole)){
    return true;
  }else{
    auth.navigateUrl('/dashboard');
    return false;
  }
};
