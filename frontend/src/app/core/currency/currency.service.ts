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
            this.isLoadingCurrencySubject.next(false);
            return EMPTY;
          } else {
            return this.changeCurrency(Currency.USD).pipe(
              tap(() => {
                this.setCurrency(Currency.USD);
                this.isLoadingCurrencySubject.next(false);
              })
            );
          }
        }),
        take(1)
      )
      .subscribe();
  })();

  private selectedCurrencySubject: BehaviorSubject<string | null> =
    new BehaviorSubject<string | null>(Currency.USD);

  private isLoadingCurrencySubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

  public readonly selectedCurrency$ =
    this.selectedCurrencySubject.asObservable();

  public readonly isLoadingCurrency$ =
    this.isLoadingCurrencySubject.asObservable();

  private setCurrency(currency: string) {
    sessionStorage.setItem('activeCurrency', currency);
    this.selectedCurrencySubject.next(currency);
  }

  private getCurrency(): Observable<{ currency: string }> {
    return this.http.get<{ currency: string }>(
      environment.backendUrl + '/api/v1/currencies',
      { withCredentials: true }
    );
  }

  public changeCurrency(currency: string): Observable<void> {
    return this.http
      .put<void>(
        environment.backendUrl + '/api/v1/currencies',
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
