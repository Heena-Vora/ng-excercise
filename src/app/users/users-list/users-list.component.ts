import { UserDetailService } from "./../../core/services/user-detail.service";
import { User } from "./../../core/models/user.model";
import { UserService } from "./../../core/services/user.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "ng-e-users-list",
  templateUrl: "./users-list.component.html",
  styleUrls: ["./users-list.component.scss"]
})
export class UsersListComponent implements OnInit {
  users = [];
  usersList;
  constructor(
    private userService: UserService,
    private detailService: UserDetailService,
    private router: Router
  ) {
    this.userService.getUsersList().subscribe(usersList => {
      this.usersList = usersList.results;
      usersList.results.forEach(element => {
        this.users.push({
          thumbnail: element.picture.thumbnail,
          firstName: element.name.first,
          lastName: element.name.last,
          fullName:
            element.name.title +
            " " +
            element.name.first +
            " " +
            element.name.last,
          email: element.email,
          phone: element.phone
        });
      });
    });
  }
  viewDetails(index) {
    let record = this.usersList[index];
    this.detailService.setDetail(record);
    this.router.navigate(["/users/user-detail"]);
  }
  ngOnInit(): void {}
}
