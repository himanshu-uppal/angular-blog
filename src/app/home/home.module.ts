import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {HomeComponent} from './home.component'
import {HomeRoutingModule} from './home-routing.module'
import {HomeArticleListResolver} from './home-article-resolver.service'
import {HomeTagsResolver} from './home-tags-resolver.service'
import {AuthenticationService,TagService} from '../core'

import {HomeFeedResolver} from './home-feed-resolver.service'


@NgModule({
    declarations:[HomeComponent],
    imports:[HomeRoutingModule,CommonModule],
    providers:[HomeArticleListResolver,
        HomeTagsResolver,
        HomeFeedResolver,
        AuthenticationService,
        TagService]
})
export class HomeModule{

}

