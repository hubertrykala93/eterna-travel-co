import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, switchMap, take, tap } from 'rxjs';
import { environment } from 'src/app/environments';
import { TranslationService } from '../translate/translation.service';
import { ACTIVE_LANGUAGE } from './language.const';
import { Language, LanguageDto } from './language.model';

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
              }),
            );
          }
        }),
        take(1),
      )
      .subscribe();
  })();

  private selectedLanguageSubject: BehaviorSubject<Language | null> =
    new BehaviorSubject<Language | null>(Language.EN);

  private isLoadingLanguageSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  public selectedLanguage$: Observable<Language | null> =
    this.selectedLanguageSubject.asObservable();
  public isLoadingLanguage$: Observable<boolean> = this.isLoadingLanguageSubject.asObservable();

  private setLanguage(language: Language): void {
    sessionStorage.setItem(ACTIVE_LANGUAGE, language);
    this.selectedLanguageSubject.next(language);
  }

  public retrieveLanguage(): string | null {
    return sessionStorage.getItem(ACTIVE_LANGUAGE) || Language.EN;
  }

  private getLanguage(): Observable<LanguageDto> {
    return this.http.get<LanguageDto>(environment.backendUrl + '/api/v1/languages', {
      withCredentials: true,
    });
  }

  public changeLanguage(language: Language): Observable<void> {
    return this.http
      .put<void>(
        environment.backendUrl + '/api/v1/languages',
        { language },
        { withCredentials: true },
      )
      .pipe(
        tap(() => {
          this.setLanguage(language);
          this.translationService.setTranslations(language);
        }),
      );
  }
}
