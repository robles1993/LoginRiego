import { routing } from "./app.routing";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { FormsModule } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule,FormsModule,HttpClientModule, routing],
  providers: [CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule {}