import { Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { ServicesComponent } from '../pages/services/services.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
// import { LearningComponent } from '@app/learning';

export enum AppRoute {
    WELCOME = 'welcome',
    SERVICES = 'services',
    ABOUT = 'about',
    CONTACT = 'contact'
}

export const routes: Routes = [
    {
        path: '',
        redirectTo: AppRoute.WELCOME,
        pathMatch: 'full'
    },
    {
        path: AppRoute.WELCOME,
        component: WelcomeComponent
    },
    {
        path: AppRoute.CONTACT,
        component: ContactComponent
    },
    {
        path: AppRoute.SERVICES,
        component: ServicesComponent
    },
    {
        path: AppRoute.ABOUT,
        component: AboutComponent
    },
    { path: '**', redirectTo: AppRoute.WELCOME }

    /* 
    {
        path: 'home',
        component: WelcomeComponent,
    },
    {
        path: 'studio',
        loadChildren: () => import('@app/studio').then(it => it.STUDIO_ROUTES),
        canActivate: [CanActivateTeacherRoute]
    },
    {
        path: 'learning',
        loadComponent: () => import('@app/learning').then(it => it.LearningComponent),
        canActivate: [CanActivateStudentRoute]
    },
    {
        path: 'degrees',
        loadComponent: () => import('../pages/degrees/degrees.component').then(it => it.DegreesComponent),
        canActivate: [CanActivateStudentRoute]
    },
    {
        path: 'calendar',
        loadComponent: () => import('../pages/calendar/calendar.component').then(it => it.CalendarComponent),
        canActivate: [CanActivateStudentRoute]
    },
    {
        path: 'calendar',
        loadComponent: () => import('../pages/calendar/calendar.component').then(it => it.CalendarComponent),
        canActivate: [CanActivateStudentRoute]
    },
    {
        path: 'course/:id',
        loadChildren: () => import('./course.routes').then(it => it.CourseRoutes),
        // canActivate: [CanActivateStudentRoute]
    },
     */

];

