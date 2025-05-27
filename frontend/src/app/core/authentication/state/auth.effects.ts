import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';
import { AuthActions } from './auth.actions.types';

@Injectable()
export class AuthEffects {
  private readonly actions = inject(Actions);

  register$ = createEffect(() =>
    this.actions.pipe(
      ofType(AuthActions.REGISTER),
      tap((action) => console.log(action))
    )
  );
}
