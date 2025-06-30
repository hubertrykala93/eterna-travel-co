import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, switchMap, take, tap } from 'rxjs';
import { environment } from 'src/app/environments';
import { Currency } from './currency.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private readonly http = inject(HttpClient);

  private readonly initializeCurrency = (() => {
    this.getCurrency()
      .pipe(
        switchMap((response) => {
          const currency = response.currency;

          if (currency) {
            this.setCurrency(currency);
            return EMPTY;
          } else {
            return this.changeCurrency(Currency.USD).pipe(
              tap(() => this.setCurrency(Currency.USD))
            );
          }
        }),
        take(1)
      )
      .subscribe();
  })();

  private selectedCurrencySubject: BehaviorSubject<string | null> =
    new BehaviorSubject<string | null>(Currency.USD);

  public readonly selectedCurrency$ =
    this.selectedCurrencySubject.asObservable();

  private setCurrency(currency: string) {
    sessionStorage.setItem('activeCurrency', currency);
    this.selectedCurrencySubject.next(currency);
  }

  private getCurrency(): Observable<{ currency: string }> {
    return this.http.get<{ currency: string }>(
      environment.backendUrl + '/api/v1/currency',
      { withCredentials: true }
    );
  }

  public changeCurrency(currency: string): Observable<void> {
    return this.http
      .put<void>(
        environment.backendUrl + '/api/v1/currency',
        { currency },
        { withCredentials: true }
      )
      .pipe(
        tap(() => {
          this.setCurrency(currency);
        })
      );
  }
}
