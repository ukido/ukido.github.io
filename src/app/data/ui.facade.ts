import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Language, Languages, MediaBreakPointMatches, Theme, Themes } from '../data/model/ui.model';
import { HideAppSpinner, SetCurrentLanguage, SetMediaBreakPointMatches, SetTheme, ShowAppSpinner } from './store/ui/ui.actions';
import { UiSelectors } from './store/ui/ui.selectors';

@Injectable({ providedIn: 'root' })
export class UiFacade {
    
    public readonly themes$: Observable<Themes> = inject(Store).select(UiSelectors.themes);
    public readonly theme$: Observable<Theme | null> = inject(Store).select(UiSelectors.currentTheme);
    public readonly languages$: Observable<Languages> = inject(Store).select(UiSelectors.languages);
    public readonly language$: Observable<string | null> = inject(Store).select(UiSelectors.currentLang);
    public readonly spinner$: Observable<boolean> = inject(Store).select(UiSelectors.isSpinnerOn);
    public readonly firstMatchingBreakPoint$: Observable<string | undefined> = inject(Store).select(UiSelectors.firstMatchingBreakPoint);

    constructor(private store: Store, private translate: TranslateService) { }

    setMediaBreakPointMatches(matches: MediaBreakPointMatches) {
        this.store.dispatch(new SetMediaBreakPointMatches(matches));
    }

    setTheme(theme: Theme) {
        this.store.dispatch(new SetTheme(theme));
    }
    /* 
        setNavBar(navItems: NavItems) {
            this.store.dispatch(new SetNavItems(navItems));
        }
     */
    setCurrentLang(lang: Language) {
        this.store.dispatch(new SetCurrentLanguage(lang.code));
    }

    showAppSpinner() {
        this.store.dispatch(new ShowAppSpinner());
    }

    hideAppSpinner() {
        this.store.dispatch(new HideAppSpinner());
    }



}