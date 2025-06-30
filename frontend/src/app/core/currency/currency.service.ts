import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { environment } from 'src/app/environments';
import { Currency } from './currency.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private readonly http = inject(HttpClient);

  private selectedCurrencySubject = new BehaviorSubject<string>(
    this.getCurrency() ?? Currency.USD
  );
  public readonly selectedCurrency$ =
    this.selectedCurrencySubject.asObservable();

  public getCurrency(): string | null {
    return sessionStorage.getItem('activeCurrency');
  }

  public setCurrency(currency: string): void {
    sessionStorage.setItem('activeCurrency', currency);
    this.selectedCurrencySubject.next(currency);
  }

  public loadCurrency(): Observable<{ currency: string }> {
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
      .pipe(tap(() => this.setCurrency(currency)));
  }
}
