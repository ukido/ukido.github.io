import { Component, Input } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { AppSvgIconDirective } from "../icon/svgicon.component";
import { NavbarItems } from "@app/data/model/ui.model";


@Component({
    selector: 'app-footer',
    imports: [MatListModule, MatDividerModule, MatButtonModule, MatIconModule,
        AppSvgIconDirective, TranslateModule, RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class AppFooterComponent {

    @Input()
    navItems: NavbarItems | null = [];

}