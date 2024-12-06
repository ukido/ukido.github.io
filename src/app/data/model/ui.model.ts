export interface Language {
    code: string;
    current: boolean;
}

export declare type Languages = Language[];

//export declare type Theme = 'LIGHT' | 'DARK';
export enum Theme {
    LIGHT = 'LIGHT',
    DARk = 'DARK'
}

export declare type Themes = Array<{
    theme: Theme,
    className: string;
    icon: string;
    current: boolean;
}>;

export declare type SpinnerStateModel = boolean;


export enum MediaBreakPoint {
    XSmall = 'XSmall',
    Small = 'Small',
    Medium = 'Medium',
    Large = 'Large',
    XLarge = 'XLarge',
    Handset = 'Handset',
    Tablet = 'Tablet',
    Web = 'Web',
    HandsetPortrait = 'HandsetPortrait',
    TabletPortrait = 'TabletPortrait',
    WebPortrait = 'WebPortrait',
    HandsetLandscape = 'HandsetLandscape',
    TabletLandscape = 'TabletLandscape',
    WebLandscap = 'WebLandscap'
}


export declare type MediaBreakPointMatches = {
    [key: string]: boolean
};
