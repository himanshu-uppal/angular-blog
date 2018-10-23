import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule,Routes} from '@angular/router'
import { HomeComponent } from './home.component';
import {HomeArticleListResolver} from './home-article-resolver.service'
import { HomeTagsResolver } from './home-tags-resolver.service';
import {HomeFeedResolver} from './home-feed-resolver.service'


const routes:Routes = [  
    {path:'',component:HomeComponent,resolve:{articles:HomeArticleListResolver,
                                              tags:HomeTagsResolver
                                              // feed:HomeFeedResolver
                                            }
                                            },
    {path:'tags/:tag',component:HomeComponent,resolve:{articles:HomeArticleListResolver,
                                              tags:HomeTagsResolver
                                              // feed:HomeFeedResolver
                                            }}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class HomeRoutingModule { }
