import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ArticleService,
  AuthenticationService,
  AuthenticationTokenService
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ArticleService,
    AuthenticationService,
    AuthenticationTokenService
  ],
  declarations: []
})
export class CoreModule { }