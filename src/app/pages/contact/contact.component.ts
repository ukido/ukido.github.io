import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  constructor(private translate: TranslateService) {
    //translate.setDefaultLang('fr');
  }


}
