import { MediaBreakPointMatches, Theme } from "../../model/ui.model";
/* 
export class SetNavItems {
    static readonly type = '[REX-UI] Set navbar items';
    constructor(public items: NavItems) {
    }
} */

export class SetMediaBreakPointMatches {
    static readonly type = '[UKD-UI] Set media break point matches state';
    constructor(public matches: MediaBreakPointMatches) {
    }
}

export class SetCurrentLanguage {
    static readonly type = '[UKD-UI] Set user current language';
    constructor(public lang: string) {
    }
}

export class SetTheme {
    static readonly type = '[UKD-UI] Set user current theme';
    constructor(public theme: Theme) { }
}

export class ShowAppSpinner {
    static readonly type = '[UKD-UI] Show app spinner';
}


export class HideAppSpinner {
    static readonly type = '[UKD-UI] Hide app spinner';
}