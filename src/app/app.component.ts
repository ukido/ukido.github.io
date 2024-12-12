import { AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { MediaBreakPointSpec } from './data/model/ui.model';
import { UiFacade } from './data/ui.facade';
import { AppDrawerMenuComponent } from './pages/common/drawer/drawer.component';
import { AppNavbarComponent } from './pages/common/header/navbar/navbar.component';
import { AppFooterComponent } from './pages/common/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    MatSidenavModule,
    AsyncPipe,
    AppNavbarComponent,
    AppDrawerMenuComponent,
    AppFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {

  private onDestroy$ = new Subject<void>();
  readonly matchingBreakPointChanges$: Observable<MediaBreakPointSpec>;

  openSidenav: boolean = false;

  constructor(public uiFacade: UiFacade, private translate: TranslateService) {
    translate.setDefaultLang('fr');
    this.matchingBreakPointChanges$ = uiFacade.matchingBreakPointChanges$;
  }

  ngOnInit(): void {

  }


  toggleSidenav(): void {
    this.openSidenav = !this.openSidenav;
  }


  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
