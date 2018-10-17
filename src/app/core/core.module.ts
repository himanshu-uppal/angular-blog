import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ArticleService
} from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    ArticleService
  ],
  declarations: []
})
export class CoreModule { }