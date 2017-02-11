import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main-container/main.component';
import {contentRouting} from "./content-routing-module";

@NgModule({
  imports: [
    CommonModule,
    contentRouting
  ],
  declarations: [MainComponent]
})
export class ContentModule { }
