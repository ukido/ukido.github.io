import { Component } from "@angular/core";
import { MatButtonModule, MatIconButton } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";


@Component({
    selector: 'app-footer',
    imports: [MatListModule, MatDividerModule, MatButtonModule, MatIconModule, TranslateModule, RouterLink],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class AppFooterComponent {

}