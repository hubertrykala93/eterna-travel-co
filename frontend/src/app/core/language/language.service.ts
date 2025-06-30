import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, switchMap, take, tap } from 'rxjs';
import { environment } from 'src/app/environments';
import { Language } from './language.model';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly http = inject(HttpClient);

  private readonly initializeLanguage = (() => {
    this.getLanguage()
      .pipe(
        switchMap((response) => {
          const language = response.language;

          if (language) {
            this.setLanguage(language);
            this.isLoadingLanguageSubject.next(false);
            return EMPTY;
          } else {
            return this.changeLanguage(Language.US).pipe(
              tap(() => {
                this.setLanguage(Language.US);
                this.isLoadingLanguageSubject.next(false);
              })
            );
          }
        }),
        take(1)
      )
      .subscribe();
  })();

  private selectedLanguageSubject: BehaviorSubject<string | null> =
    new BehaviorSubject<string | null>(Language.US);

  private isLoadingLanguageSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

  public selectedLanguage$ = this.selectedLanguageSubject.asObservable();
  public isLoadingLanguage$ = this.isLoadingLanguageSubject.asObservable();

  private setLanguage(language: string): void {
    sessionStorage.setItem('activeLanguage', language);
    this.selectedLanguageSubject.next(language);
  }

  private getLanguage(): Observable<{ language: string }> {
    return this.http.get<{ language: string }>(
      environment.backendUrl + '/api/v1/languages',
      { withCredentials: true }
    );
  }

  public changeLanguage(language: string): Observable<void> {
    return this.http
      .put<void>(
        environment.backendUrl + '/api/v1/languages',
        { language },
        { withCredentials: true }
      )
      .pipe(tap(() => this.setLanguage(language)));
  }
}
