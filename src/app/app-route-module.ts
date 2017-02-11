import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {LoginContainerComponent} from "./components/login-container/login-container.component";

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login', component: LoginContainerComponent, children: [
    {path: '', component: LoginComponent}
  ]
  },
  {path: 'content', loadChildren: 'app/content/content.module#ContentModule'}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);


