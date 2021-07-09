import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServerComponent} from './server/server.component';
import {ServerResolver} from './server/server-resolver.service';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'server', component: ServerComponent, resolve: {server: ServerResolver}},
  {path: 'user', loadChildren: './user/user.module#UserModule'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
