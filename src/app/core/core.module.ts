import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ArticleService,
  AuthenticationService
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ArticleService,
    AuthenticationService
  ],
  declarations: []
})
export class CoreModule { }