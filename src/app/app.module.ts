import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {
  HeaderComponent,
  FooterComponent} from './shared'

import {ArticleService,AuthenticationService} from './core'
import {HttpClientModule} from '@angular/common/http'
import {AuthenticationModule} from './authentication/authentication.module'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthenticationModule
  ],
  providers: [ArticleService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
