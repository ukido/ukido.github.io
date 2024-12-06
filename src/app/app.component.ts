import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavBarComponent } from './nav/nav.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppNavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

constructor(private translate: TranslateService) {
  translate.setDefaultLang('fr');
}


}
