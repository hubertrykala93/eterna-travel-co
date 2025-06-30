import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly translateService = inject(TranslateService);

  public readonly loadTranslations = (() => {
    this.translateService.use(this.getLanguage());
  })();

  private getLanguage(): string {
    return sessionStorage.getItem('activeLanguage') || 'en';
  }

  public setTranslations(language: string): void {
    this.translateService.use(language);
  }
}
