import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import ValidationUtils from '../utils/validation.utils';
import { environment } from './../../environments';
import {
  NewsletterControls,
  NewsletterRequest,
  NewsletterResponse,
} from './newsletter.model';

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  private readonly http = inject(HttpClient);
  private readonly formBuilder = inject(FormBuilder);

  public createNewsletter(
    data: NewsletterRequest
  ): Observable<NewsletterResponse> {
    return this.http.post<NewsletterResponse>(
      `${environment.backendUrl}/newsletter`,
      data
    );
  }

  public getNewsletterForm(): FormGroup<NewsletterControls> {
    return this.formBuilder.group<NewsletterControls>({
      email: this.formBuilder.control<string | null>(
        '',
        ValidationUtils.EMAIL_VALIDATOR
      ),
    });
  }
}
