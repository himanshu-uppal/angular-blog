import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { ArticleCreateComponent } from './article-create.component';
import {ArticleUpdateComponent} from './article-update.component'
import {ArticleRoutingModule} from './article-routing.module'
import {FormsModule} from '@angular/forms'
import {ArticleService} from '../core'
import {ArticleResolverService} from './article-resolver.service'
import {ArticleComponent} from './article.component'
import {AuthenticationGuardService} from '../core'
import {MyArticlesResolver} from './my-articles-resolver.service'
import {MyArticlesComponent} from './my-articles.component'



@NgModule({
    declarations:[ArticleCreateComponent,ArticleUpdateComponent,ArticleComponent,MyArticlesComponent],
    imports:[CommonModule,ArticleRoutingModule,FormsModule],
    providers:[ArticleService,
        ArticleResolverService,
        AuthenticationGuardService,
        MyArticlesResolver
    ]

})
export class ArticleModule{

} 