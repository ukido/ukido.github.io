import { Component, EventEmitter, Input, Output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { Language, Languages, NavbarItems, Theme, Themes } from "@app/data/model/ui.model";

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink, MatListModule, MatButtonModule, MatIconModule, TranslateModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class AppNavbarComponent {

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
