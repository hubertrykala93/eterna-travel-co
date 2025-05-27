import { createReducer, on } from '@ngrx/store';
import { register, registerFailure, registerSuccess } from './auth.actions';

export interface AuthState {
  loading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  loading: false,
  error: null,
};

export const authReducer = createReducer(
  initialState,
  on(register, (state) => {
    console.log('REDUCER: register called');
    return {
      ...state,
      loading: true,
      error: null,
    };
  }),
  // on(register, (state) => ({
  //   ...state,
  //   loading: true,
  //   error: null,
  // })),
  on(registerSuccess, (state) => ({
    ...state,
    loading: false,
    error: null,
  })),
  on(registerFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  }))
);
