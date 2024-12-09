import { Breakpoints } from "@angular/cdk/layout";

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


export declare type MediaBreakPointMatches = {
    [key: string]: boolean
};

export interface MediaBreakPointSpec {
    matches: string[];
    sidenav: boolean;
    themes: 'navbar'| 'sidenav' | 'hide'
    langs: 'navbar'| 'sidenav' | 'hide'
}


export const XSmallMediaBreakPointSpec: MediaBreakPointSpec = {
    matches: [Breakpoints.XSmall, Breakpoints.Small],
    sidenav: true,
    themes: 'navbar',
    langs: 'navbar'
} 

export const MediumMediaBreakPointSpec: MediaBreakPointSpec = {
    matches: [Breakpoints.Medium, Breakpoints.Tablet],
    sidenav: true,
    themes: 'navbar',
    langs: 'navbar'
} 

export const LargeMediaBreakPointSpec: MediaBreakPointSpec = {
    matches: [Breakpoints.Large, Breakpoints.XLarge],
    sidenav: false,
    themes: 'navbar',
    langs: 'navbar'
} 


export enum AppRoute {
    WELCOME = 'welcome',
    SERVICES = 'services',
    ABOUT = 'about',
    CONTACT = 'contact'
}

export interface NavbarItem {
    key: string;
    text?: string;
    route: AppRoute;
    current: boolean;
}


export declare type NavbarItems = NavbarItem[];