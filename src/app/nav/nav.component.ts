import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from "@angular/router";

export interface NavbarItem {
    key: string;
    route: string;
    current: boolean;
}

export const NAV_ITEMS: NavbarItem[] = [
    {
        key: 'nav.items.home',
        route: '/home',
        current: false
    },
    {
        key: 'nav.items.categories',
        route: '/cats',
        current: false
    },
    {
        key: 'nav.items.about',
        route: '/about',
        current: false
    },
    {
        key: 'nav.items.services',
        route: '/servies',
        current: false
    }
];


@Component({
    selector: 'app-navbar-menu',
    standalone: true,
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
    standalone: true,
    imports: [MatButtonModule, MatIconModule, MatListModule, RouterLink],
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
                    {{item.key}}
                    </a>
                }
            </div>
            <div class="navbar-actions">
                <button mat-button aria-label="Nav bar side menu toggler">
                    FR
                </button>     
                <button mat-icon-button aria-label="Nav bar side menu toggler">
                    <mat-icon>dark_mode</mat-icon>
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

