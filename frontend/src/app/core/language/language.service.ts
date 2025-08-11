import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, of, switchMap, take, tap } from 'rxjs';
import { environment } from 'src/app/environments';
import { TranslationService } from '../translate/translation.service';
import { ACTIVE_LANGUAGE } from './language.const';
import { LanguageCode, LanguageDto, LanguageName, LanguageNavigationButton } from './language.model';

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
            return this.changeLanguage(LanguageCode.EN).pipe(
              tap(() => {
                this.setLanguage(LanguageCode.EN);
                this.isLoadingLanguageSubject.next(false);
              }),
            );
          }
        }),
        take(1),
      )
      .subscribe();
  })();

  public getLanguageNavigationButtons(): Observable<LanguageNavigationButton[]> {
    return of([
      {
        src: 'assets/flags/us-flag.png',
        alt: 'United states flag',
        code: LanguageCode.EN,
        textKey: 'header.english-us',
        defaultText: LanguageName.ENGLISH,
      },
      {
        src: 'assets/flags/poland-flag.png',
        alt: 'Poland flag',
        code: LanguageCode.PL,
        textKey: 'header.polish-pl',
        defaultText: LanguageName.POLISH,
      },
    ]);
  }

  private selectedLanguageSubject: BehaviorSubject<LanguageCode | null> = new BehaviorSubject<LanguageCode | null>(
    LanguageCode.EN,
  );
  private isLoadingLanguageSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  public selectedLanguage$: Observable<LanguageCode | null> = this.selectedLanguageSubject.asObservable();
  public isLoadingLanguage$: Observable<boolean> = this.isLoadingLanguageSubject.asObservable();

  private setLanguage(language: LanguageCode): void {
    sessionStorage.setItem(ACTIVE_LANGUAGE, language);
    this.selectedLanguageSubject.next(language);
  }

  public retrieveLanguage(): string | null {
    return sessionStorage.getItem(ACTIVE_LANGUAGE) || LanguageCode.EN;
  }

  private getLanguage(): Observable<LanguageDto> {
    return this.http.get<LanguageDto>(environment.backendUrl + '/api/v1/languages', {
      withCredentials: true,
    });
  }

  public changeLanguage(language: LanguageCode): Observable<void> {
    return this.http
      .put<void>(environment.backendUrl + '/api/v1/languages', { language }, { withCredentials: true })
      .pipe(
        tap(() => {
          this.setLanguage(language);
          this.translationService.setTranslations(language);
        }),
      );
  }
}
