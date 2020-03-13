import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { UserDetailService } from './../../core/services/user-detail.service';

@Component({
  selector: "ng-e-user-detail",
  templateUrl: "./user-detail.component.html",
  styleUrls: ["./user-detail.component.scss"]
})
export class UserDetailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  user;
  constructor(private detailService: UserDetailService) {}

  ngOnInit(): void {
    this.subscription = this.detailService.getDetail().subscribe(
      detail => {
        this.user = detail;
        console.log(this.user)
      }
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
