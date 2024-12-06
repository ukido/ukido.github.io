import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  constructor(private translate: TranslateService) {
    // translate.setDefaultLang('fr');
  }


}
