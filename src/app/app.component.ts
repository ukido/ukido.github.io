import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavBarComponent } from './nav/nav.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, AppNavBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ukido';
}
