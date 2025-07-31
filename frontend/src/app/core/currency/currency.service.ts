import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, switchMap, take, tap } from 'rxjs';
import { environment } from 'src/app/environments';
import { ACTIVE_CURRENCY } from './currency.const';
import { CurrencyCode, CurrencyDto, CurrencyNavigationButton } from './currency.model';

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
            return this.changeCurrency(CurrencyCode.USD).pipe(
              tap(() => {
                this.setCurrency(CurrencyCode.USD);
                this.isLoadingCurrencySubject.next(false);
              }),
            );
          }
        }),
        take(1),
      )
      .subscribe();
  })();

  public getCurrencyNavigationButtons(): CurrencyNavigationButton[] {
    return [
      {
        code: CurrencyCode.USD,
        defaultText: CurrencyCode.USD,
      },
      {
        code: CurrencyCode.EUR,
        defaultText: CurrencyCode.EUR,
      },
      {
        code: CurrencyCode.CHF,
        defaultText: CurrencyCode.CHF,
      },
      {
        code: CurrencyCode.PLN,
        defaultText: CurrencyCode.PLN,
      },
    ];
  }

  private selectedCurrencySubject: BehaviorSubject<CurrencyCode | null> = new BehaviorSubject<CurrencyCode | null>(
    CurrencyCode.USD,
  );
  private isLoadingCurrencySubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  public readonly selectedCurrency$: Observable<CurrencyCode | null> = this.selectedCurrencySubject.asObservable();
  public readonly isLoadingCurrency$: Observable<boolean> = this.isLoadingCurrencySubject.asObservable();

  private setCurrency(currency: CurrencyCode): void {
    sessionStorage.setItem(ACTIVE_CURRENCY, currency);
    this.selectedCurrencySubject.next(currency);
  }

  private getCurrency(): Observable<CurrencyDto> {
    return this.http.get<CurrencyDto>(environment.backendUrl + '/api/v1/currencies', {
      withCredentials: true,
    });
  }

  public changeCurrency(currency: CurrencyCode): Observable<void> {
    return this.http
      .put<void>(environment.backendUrl + '/api/v1/currencies', { currency }, { withCredentials: true })
      .pipe(
        tap(() => {
          this.setCurrency(currency);
        }),
      );
  }
}
