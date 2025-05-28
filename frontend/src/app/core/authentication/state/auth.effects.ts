import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { registerFailure, registerSuccess } from './auth.actions';
import { AuthActions } from './auth.actions.types';

@Injectable()
export class AuthEffects {
  private readonly actions = inject(Actions);
  private readonly authenticationService = inject(AuthenticationService);

  register$ = createEffect(() =>
    this.actions.pipe(
      ofType(AuthActions.REGISTER),
      mergeMap(({ user }) =>
        this.authenticationService.register(user).pipe(
          map(() =>
            registerSuccess({
              message:
                'Your account has been created succesfully. Please check your inbox, and activate your account now.',
            })
          ),
          catchError((error) => {
            return of(registerFailure({ error: error.error.error }));
          })
        )
      )
    )
  );
}
