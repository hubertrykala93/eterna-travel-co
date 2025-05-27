import { bootstrapApplication } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { authReducer } from './app/core/authentication/state/auth.reducer';
import { environment } from './app/environments';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({
      auth: authReducer,
    }),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
});
