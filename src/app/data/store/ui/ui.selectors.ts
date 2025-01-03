import { Selector } from "@ngxs/store";
import { Language, Languages, MediaBreakPointMatches, MediaBreakPointSpec, NavbarItems, Theme, Themes } from "../../model/ui.model";
import { AppNavbarItemsState, LanguagesState, MediaBreakPointMatchesState, SpinnerState } from "./ui.state";
// import { NavItemsState } from "./nav-items.state";
import { ThemesState } from "./ui.state";

export class UiSelectors {

    @Selector([
        MediaBreakPointMatchesState.matches
    ])
    public static matchingBreakPointSpec(matches: MediaBreakPointSpec): MediaBreakPointSpec {
        return matches;
    }

    @Selector([
        ThemesState.themes
    ])
    public static themes(themes: Themes): Themes {
        return themes;
    }

    @Selector([
        ThemesState.themes
    ])
    public static theme(themes: Themes): Themes[0] | undefined {
        return (themes || []).find(theme => theme.current);
    }



    @Selector([
        ThemesState.themes
    ])
    public static currentTheme(themes: Themes): Theme | null {
        const theme = (themes || []).find(theme => theme.current);
        if (theme) {
            return theme.theme
        }
        return null;
    }

    /* 
        @Selector([
            NavItemsState.navItems
        ])
        public static navItems(navItems: NavItems): NavItems {
            return navItems;
        } */

    @Selector([
        LanguagesState.languages
    ])
    public static languages(languages: Language[]): Languages {
        return languages;
    }

    @Selector([
        LanguagesState.current
    ])
    public static currentLang(lang: Language | undefined): string | null {
        if (lang) {
            return lang.code
        }
        return null;
    }

    @Selector([
        AppNavbarItemsState.all
    ])
    public static navbarItems(items: NavbarItems): NavbarItems {
        return items;
    }

    @Selector([
        SpinnerState.isOn
    ])
    public static isSpinnerOn(on: boolean): boolean {
        return on;
    }

}