import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {Routes,RouterModule} from '@angular/router'
import { ArticleCreateComponent } from './article-create.component';
import { ArticleUpdateComponent } from './article-update.component';
import { ArticleResolverService } from './article-resolver.service';
import { ArticleComponent } from './article.component';
import {AuthenticationGuardService} from '../core'
import {MyArticlesResolver} from './my-articles-resolver.service'
import {MyArticlesComponent} from './my-articles.component'
import {ArticleCommentsResolver} from './article-comments-resolver.service'

const routes:Routes = [
    {path:'new',component:ArticleCreateComponent,canActivate:[AuthenticationGuardService]},
    {path:'edit/:slug',component:ArticleUpdateComponent,resolve:{article:ArticleResolverService},canActivate:[AuthenticationGuardService]},
    {path:'myarticles',component:MyArticlesComponent},
    {path:':slug',component:ArticleComponent,resolve:{article:ArticleResolverService,comments:ArticleCommentsResolver}}
      
]
@NgModule({
    imports:[CommonModule,
    RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class ArticleRoutingModule{
    
}