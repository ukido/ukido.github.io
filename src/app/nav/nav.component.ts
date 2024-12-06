import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

export interface NavbarItem {
    key: string;
    route: string;
    current: boolean;
}

export const NAV_ITEMS: NavbarItem[] = [
    {
        key: 'ui.nav.home',
        route: '/home',
        current: false
    },
    {
        key: 'ui.nav.services',
        route: '/cats',
        current: false
    },
    {
        key: 'ui.nav.about',
        route: '/about',
        current: false
    },
    {
        key: 'ui.nav.contact',
        route: '/servies',
        current: false
    }
];


@Component({
    selector: 'app-navbar-menu',
    imports: [RouterLink, MatListModule, RouterLink],
    template: `
    <mat-nav-list>
        @for (item of items ; track item) {
            <a mat-list-item [routerLink]="item.route"
            routerLinkActive="docs-component-viewer-sidenav-item-selected"
            [attr.aria-current]="item.current ? 'page': 'false'">
            {{item.key}}
            </a>
            }
    </mat-nav-list>
    `
})
export class NavBarMenuComponent {

    items: NavbarItem[] = NAV_ITEMS;

    @Output()
    onClick: EventEmitter<void> = new EventEmitter()
}



@Component({
    selector: 'app-navbar',
    imports: [MatButtonModule, MatIconModule, MatListModule, MatSlideToggleModule, RouterLink, TranslateModule],
    template: `
    <nav class="app-navbar media-lg">
        <div class="container">
            <a mat-button class="logo" href="/">
                <mat-icon>menu_open</mat-icon>
                <strong>UKido</strong>
            </a>
            <div class="navbar-menu">
                @for (item of items ; track item) {
                    <a mat-button [routerLink]="item.route"
                    routerLinkActive="navbar-item-active"
                    [attr.aria-current]="item.current ? 'page': 'false'">
                    {{item.key | translate}}
                    </a>
                }
            </div>
            <div class="navbar-actions">
           <!--      <button mat-button aria-label="Nav bar side menu toggler">
                    FR
                </button>     
                <mat-slide-toggle></mat-slide-toggle> -->
                <button mat-stroked-button aria-label="Nav bar side menu toggler">
                    Contact us
                </button>  
                <button mat-icon-button aria-label="Nav bar side menu toggler">
                    <mat-icon>menu</mat-icon>
                </button>      
            </div>
        </div>
    </nav>
    
    `,
    styleUrl: './nav.component.scss'
})
export class AppNavBarComponent {
    @Input()
    items: NavbarItem[] = NAV_ITEMS;
}

