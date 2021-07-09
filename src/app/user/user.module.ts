import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {UsrComponent} from './usr/usr.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {UserRoutingModule} from './user-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    UsrComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],

})
export class UserModule {

}
