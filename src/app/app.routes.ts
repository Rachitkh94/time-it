import { Routes } from '@angular/router';
import { NoContentComponent } from './no-content';
import { DataResolver } from './app.resolver';
import { LoginPageComponent } from './containers/login-page';
import { ProjectsListPageComponent } from './containers/projects-list-page';
export const ROUTES: Routes = [
  { path: '', component: LoginPageComponent},
  { path: 'projects', component: ProjectsListPageComponent},
  { path: '**', component: NoContentComponent },
];
