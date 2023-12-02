import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./components/app.component";
import { UserComponent } from "./components/user/user.component";
import { HttpClientModule } from "@angular/common/http";
import {UsersComponent} from "./components/users/users.component";

@NgModule({

  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent
  ],

  imports: [
    BrowserModule,
    HttpClientModule
  ],

  providers: [],
  exports: [
    UsersComponent
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }



