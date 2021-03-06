import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { ArticleCreateComponent } from './article-create.component';
import {ArticleUpdateComponent} from './article-update.component'
import {ArticleRoutingModule} from './article-routing.module'
import {FormsModule} from '@angular/forms'
import {ArticleService,CommentService} from '../core'
import {ArticleResolverService} from './article-resolver.service'
import {ArticleComponent} from './article.component'
import {AuthenticationGuardService} from '../core'
import {MyArticlesResolver} from './my-articles-resolver.service'
import {MyArticlesComponent} from './my-articles.component'
import {ArticleCommentsResolver} from './article-comments-resolver.service'
import {ShowCommentsComponent} from './comments'
import {AddCommentComponent} from './comments'
import {MyArticleActionsComponent} from './my-article-actions.component'
import {ArticleDetailsComponent} from './article-details.component'



@NgModule({
    declarations:[
        ArticleCreateComponent,
        ArticleUpdateComponent,
        ArticleComponent,
        MyArticlesComponent,
        ShowCommentsComponent,
        AddCommentComponent,
        MyArticleActionsComponent,
        ArticleDetailsComponent],
    imports:[CommonModule,ArticleRoutingModule,FormsModule],
    providers:[ArticleService,
        ArticleResolverService,
        AuthenticationGuardService,
        MyArticlesResolver,
        CommentService,
        ArticleCommentsResolver
    ]

})
export class ArticleModule{

} 