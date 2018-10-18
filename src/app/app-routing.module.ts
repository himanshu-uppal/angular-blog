import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule,Routes} from '@angular/router'

const routes:Routes = [  
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path:'articles',
    loadChildren:'./article/article.module#ArticleModule'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
