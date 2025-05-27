import { createAction, props } from '@ngrx/store';
import { UserRequest } from '../authentication.model';
import { AuthActions } from './auth.actions.types';

export const register = createAction(
  AuthActions.REGISTER,
  props<{ user: UserRequest }>()
);

export const registerSuccess = createAction(AuthActions.REGISTER_SUCCESS);
export const registerFailure = createAction(
  AuthActions.REGISTER_FAILURE,
  props<{ error: string }>()
);
