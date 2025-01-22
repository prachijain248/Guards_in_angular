import { CanDeactivateFn } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactive {
  canDeactivate: () => boolean | Observable<boolean>
}

export const unsavedChangesGuard: CanDeactivateFn<CanComponentDeactive> = (component, currentRoute, currentState, nextState) => {
  console.log('deactivate');
  return component.canDeactivate ? component.canDeactivate() : true;
};
