import {NgModule} from '@angular/core';
import {AuthComponent} from './auth.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared.module';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    RouterModule.forChild([
      {path: '', component: AuthComponent}
    ])
  ]
})
export class AuthModule {

}
