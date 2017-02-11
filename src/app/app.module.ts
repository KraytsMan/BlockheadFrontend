import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {ContentModule} from "./content/content.module";
import {LoginComponent} from "./components/login/login.component";
import {routing} from "./app-route-module";
import {LoginContainerComponent} from "./components/login-container/login-container.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ContentModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
