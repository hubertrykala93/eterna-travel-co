import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, switchMap, take, tap } from 'rxjs';
import { environment } from 'src/app/environments';
import { ACTIVE_CURRENCY } from './currency.const';
import { Currency, CurrencyDto } from './currency.model';

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
              }),
            );
          }
        }),
        take(1),
      )
      .subscribe();
  })();

  private selectedCurrencySubject: BehaviorSubject<Currency | null> =
    new BehaviorSubject<Currency | null>(Currency.USD);

  private isLoadingCurrencySubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  public readonly selectedCurrency$: Observable<Currency | null> =
    this.selectedCurrencySubject.asObservable();

  public readonly isLoadingCurrency$: Observable<boolean> =
    this.isLoadingCurrencySubject.asObservable();

  private setCurrency(currency: Currency): void {
    sessionStorage.setItem(ACTIVE_CURRENCY, currency);
    this.selectedCurrencySubject.next(currency);
  }

  private getCurrency(): Observable<CurrencyDto> {
    return this.http.get<CurrencyDto>(environment.backendUrl + '/api/v1/currencies', {
      withCredentials: true,
    });
  }

  public changeCurrency(currency: Currency): Observable<void> {
    return this.http
      .put<void>(
        environment.backendUrl + '/api/v1/currencies',
        { currency },
        { withCredentials: true },
      )
      .pipe(
        tap(() => {
          this.setCurrency(currency);
        }),
      );
  }
}
