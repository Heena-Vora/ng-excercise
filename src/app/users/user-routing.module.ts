import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [{
  path: 'users-list',
  component: UsersListComponent
}, {
  path: 'user-detail',
  component: UserDetailComponent
}, {
  path: '**',
  redirectTo: 'users-list'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
