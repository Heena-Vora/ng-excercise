import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { UserStatusService } from "./core/services/user-status.service";
import { HomeComponent } from "./home/home.component";
import { LandingComponent } from "./landing/landing.component";
import { UserModule } from "./users/user.module";

@NgModule({
  declarations: [AppComponent, HomeComponent, LandingComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, UserModule],
  providers: [UserStatusService],
  bootstrap: [AppComponent]
})
export class AppModule {}
