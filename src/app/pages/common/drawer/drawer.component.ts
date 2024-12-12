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
    imports: [RouterLink, MatListModule, MatButtonModule, MatIconModule, TranslateModule],
    templateUrl: './drawer.component.html',
    styleUrl: './drawer.component.scss',
     
})
export class AppDrawerMenuComponent {

    @Input()
    items: NavbarItems | null = [];

    @Input()
    themes: Themes | null = [];

    @Input()
    langs: Languages | null = [];

    @Output()
    closeDrawer: EventEmitter<void> = new EventEmitter();

    @Output()
    changeTheme: EventEmitter<Theme> = new EventEmitter();

    @Output()
    changeLang: EventEmitter<Language> = new EventEmitter();
}
