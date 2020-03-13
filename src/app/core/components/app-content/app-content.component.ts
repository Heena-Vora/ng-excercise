import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { User } from "../../models/user.model";
import { UserStatusService } from "../../services/user-status.service";

@Component({
  selector: "ng-e-app-content",
  templateUrl: "./app-content.component.html",
  styleUrls: ["./app-content.component.scss"]
})
export class AppContentComponent implements OnInit, OnDestroy {
  user: User = {
    firstName: "Heena",
    lastName: "Vora",
    email: "h.vora139@gmail.com",
    phone: "+918460219896"
  };
  isLoggedIn: boolean;
  subscription: Subscription;
  constructor(private userStatusService: UserStatusService) {}

  ngOnInit() {
    this.isLoggedIn = false;
    this.subscription = this.userStatusService.loginState.subscribe(
      loginState => {
        this.isLoggedIn = loginState.login;
      }
    );
  }
  login() {
    this.userStatusService.login();
  }
  logout() {
    this.userStatusService.logout();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
