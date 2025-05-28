import { createReducer, on } from '@ngrx/store';
import { register, registerFailure, registerSuccess } from './auth.actions';

export interface AuthState {
  isLoading: boolean;
  message: string | null;
  error: string | null;
}

export const initialState: AuthState = {
  isLoading: false,
  message: null,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(register, (state) => ({
    ...state,
    isLoading: true,
    error: null,
  })),
  on(registerSuccess, (state, { message }) => ({
    ...state,
    isLoading: false,
    message: message,
    error: null,
  })),
  on(registerFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error: error,
  }))
);
