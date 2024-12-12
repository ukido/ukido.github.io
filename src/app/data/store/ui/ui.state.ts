import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext, StateOperator } from '@ngxs/store';
import { compose, patch, updateItem } from '@ngxs/store/operators';
import { AppRoute, Language, Languages, LargeMediaBreakPointSpec, MediaBreakPointSpec, MediumMediaBreakPointSpec, NavbarItems, SpinnerStateModel, Theme, Themes, SmallMediaBreakPointSpec } from '../../model/ui.model';
import { byCodeLanguagePedicate, currentLanguagePedicate } from './languages.operator';
import { HideAppSpinner, SetCurrentLanguage, SetMediaBreakPointMatches, SetTheme, ShowAppSpinner } from './ui.actions';
import { Breakpoints } from "@angular/cdk/layout";


export const defaultLanguages: Languages = [
    {
        code: 'en',
        current: true
    },
    {
        code: 'fr',
        current: false
    }
]

@State<Languages>({
    name: 'AppLanguages',
    defaults: defaultLanguages
})
@Injectable()
export class LanguagesState {

    @Selector()
    static languages(state: Languages): Languages {
        return state;
    }

    @Selector()
    static current(state: Languages): Language | undefined {
        return (state || []).find(lang => lang.current);
    }

    @Action(SetCurrentLanguage)
    setNavItems(ctx: StateContext<Languages>, { lang }: SetCurrentLanguage) {
        const unSetCurrent: StateOperator<Language> = patch({ current: false });
        const setCurrent: StateOperator<Language> = patch({ current: true });
        ctx.setState(
            compose(
                updateItem(currentLanguagePedicate, unSetCurrent),
                updateItem(byCodeLanguagePedicate(lang), setCurrent)
            )
        );

    }
}


@State<MediaBreakPointSpec>({
    name: 'AppMediaBreakPointSpec',
    defaults: LargeMediaBreakPointSpec
})
@Injectable()
export class MediaBreakPointMatchesState {

    @Selector()
    static matches(state: MediaBreakPointSpec): MediaBreakPointSpec {
        return state;
    }

    @Action(SetMediaBreakPointMatches)
    setMediaBreakPointMatches(ctx: StateContext<MediaBreakPointSpec>, { matches }: SetMediaBreakPointMatches) {
        Object.keys(matches || {})
            .filter(bp => matches[bp])
            .forEach(bp => {
                if ([Breakpoints.XSmall, Breakpoints.Small].includes(bp)) {
                    ctx.setState(SmallMediaBreakPointSpec);
                } else if ([Breakpoints.Tablet, Breakpoints.Medium].includes(bp)) {
                    ctx.setState(MediumMediaBreakPointSpec);
                } else {
                    ctx.setState(LargeMediaBreakPointSpec);
                }
            })

    }
}


@State<Themes>({
    name: 'AppTheme',
    defaults: [
        {
            theme: Theme.LIGHT,
            className: 'rex-light-theme',
            icon: 'light_mode',
            current: true
        },
        {
            theme: Theme.DARk,
            className: 'rex-dark-theme',
            icon: 'dark_mode',
            current: false
        }

    ]
})
@Injectable()
export class ThemesState {

    @Selector()
    static themes(state: Themes): Themes {
        return state;
    }

    @Action(SetTheme)
    setTheme(ctx: StateContext<Themes>, { theme }: SetTheme) {
        const newState = ctx.getState().map(th => ({ ...th, current: th.theme === theme }));
        ctx.setState(newState);

    }
}


@State<NavbarItems>({
    name: 'AppNavbarItems',
    defaults: [
        {
            key: 'ui.nav.home',
            route: AppRoute.WELCOME,
            current: false
        },
        {
            key: 'ui.nav.services',
            route: AppRoute.SERVICES,
            current: false
        },
        {
            key: 'ui.nav.about',
            route: AppRoute.ABOUT,
            current: false
        },
        {
            key: 'ui.nav.contact',
            route: AppRoute.CONTACT,
            current: false
        }
    ]
})
@Injectable()
export class AppNavbarItemsState {

    @Selector()
    static all(state: NavbarItems): NavbarItems {
        return state;
    }

}



@State<SpinnerStateModel>({
    name: 'AppSpinner',
    defaults: false
})
@Injectable()
export class SpinnerState {

    @Selector()
    static isOn(state: SpinnerStateModel): boolean {
        return state;
    }

    @Action(ShowAppSpinner)
    showSpinner(ctx: StateContext<SpinnerStateModel>) {
        ctx.setState(true);
    }

    @Action(HideAppSpinner)
    hideSpinner(ctx: StateContext<SpinnerStateModel>) {
        ctx.setState(false);
    }
}



