import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { RouterLink } from "@angular/router";
import { Language, Languages, NavbarItems, Theme, Themes } from "@app/data/model/ui.model";
import { TranslateModule } from "@ngx-translate/core";


@Component({
    selector: 'app-drawer-menu',
    standalone: true,
    imports: [RouterLink, MatListModule, MatIconModule, TranslateModule],
    styleUrl: './drawer-menu.component.scss',
    template: `
    <mat-nav-list>
        @for (item of items ; track item) {
            <a mat-list-item [routerLink]="['/', item.route]"
            routerLinkActive="docs-component-viewer-sidenav-item-selected"
            [attr.aria-current]="item.current ? 'page': 'false'">
            {{item.key | translate}}
            </a>
            }
    </mat-nav-list>
    `
})
export class AppDrawerMenuComponent {

    @Input()
    items: NavbarItems | null = [];

    @Input()
    themes: Themes | null = [];

    @Input()
    langs: Languages | null = [];

    @Output()
    openDrawer: EventEmitter<void> = new EventEmitter();

    @Output()
    changeTheme: EventEmitter<Theme> = new EventEmitter();

    @Output()
    changeLang: EventEmitter<Language> = new EventEmitter();
}
