import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { provideStore } from '@ngxs/store';
import { routes } from './routing/app.routes';
import { LanguagesState, SpinnerState, ThemesState } from './data/store/ui/ui.state';

export const NGXS_STATES = [
  ThemesState,
  LanguagesState,
  SpinnerState
];



// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/i18n/');
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideAnimationsAsync(),
    provideHttpClient(),
    provideRouter(routes),
    provideStore(
      NGXS_STATES,
      withNgxsReduxDevtoolsPlugin(),
      // withNgxsStoragePlugin()
    ),
    importProvidersFrom(
      TranslateModule.forRoot({
        useDefaultLang: true,
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      }))
  ]
};
