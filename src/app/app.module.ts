import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ServerComponent} from './server/server.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthGuard} from './auth-guard.service';
import {AuthService} from './auth.service';
import {ServerResolver} from './server/server-resolver.service';
import {FormsModule} from '@angular/forms';
import {AuthInterceptorService} from './home/auth-interceptor.service';
import {AuthModule} from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AuthService, ServerResolver,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
