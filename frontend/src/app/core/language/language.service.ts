import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, switchMap, take, tap } from 'rxjs';
import { environment } from 'src/app/environments';
import { TranslationService } from '../translate/translation.service';
import { Language } from './language.model';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly http = inject(HttpClient);
  private readonly translationService = inject(TranslationService);

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
            return this.changeLanguage(Language.EN).pipe(
              tap(() => {
                this.setLanguage(Language.EN);
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
    new BehaviorSubject<string | null>(Language.EN);

  private isLoadingLanguageSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

  public selectedLanguage$ = this.selectedLanguageSubject.asObservable();
  public isLoadingLanguage$ = this.isLoadingLanguageSubject.asObservable();

  private setLanguage(language: string): void {
    sessionStorage.setItem('activeLanguage', language);
    this.selectedLanguageSubject.next(language);
  }

  public retrieveLanguage(): string | null {
    return sessionStorage.getItem('activeLanguage') || 'en';
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
      .pipe(
        tap(() => {
          this.setLanguage(language);
          this.translationService.setTranslations(language);
        })
      );
  }
}
