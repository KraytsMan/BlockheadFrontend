import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./components/main-container/main.component";

export const routes: Routes = [
  {path: 'main', component: MainComponent}
];

export const contentRouting: ModuleWithProviders = RouterModule.forChild(routes);
