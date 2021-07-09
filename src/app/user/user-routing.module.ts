import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserComponent} from './user.component';
import {UsrComponent} from './usr/usr.component';
import {AuthGuard} from '../auth-guard.service';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    component: UserComponent,
    children: [
      {path: ':id/:name', component: UsrComponent},
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule {

}
