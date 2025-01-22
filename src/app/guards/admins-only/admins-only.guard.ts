import { CanMatchFn } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';

export const adminsOnlyGuard: CanMatchFn = (route, segments) => {
  const auth = inject(AuthService);

  if(auth.hasRole('admin')){
    return true;
  }else{
    auth.navigateUrl('/login');
    return false;
  }
};
