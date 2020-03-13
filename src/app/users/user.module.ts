import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { RouterModule } from "@angular/router";
import { UserService } from "./../core/services/user.service";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserRoutingModule } from "./user-routing.module";
import { UsersListComponent } from "./users-list/users-list.component";
import { UserDetailService } from '../core/services/user-detail.service';
@NgModule({
  declarations: [UsersListComponent, UserDetailComponent],
  imports: [CommonModule, RouterModule, UserRoutingModule, HttpClientModule, MatListModule],
  exports: [UsersListComponent, UserDetailComponent],
  providers: [UserService, UserDetailService]
})
export class UserModule {}
