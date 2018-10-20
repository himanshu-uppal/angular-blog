import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {Routes,RouterModule} from '@angular/router'
import { ArticleCreateComponent } from './article-create.component';
import { ArticleUpdateComponent } from './article-update.component';
import { ArticleResolverService } from './article-resolver.service';
import { ArticleComponent } from './article.component';
import {AuthenticationGuardService} from '../core'

const routes:Routes = [
    {path:'new',component:ArticleCreateComponent,canActivate:[AuthenticationGuardService]},
    {path:'edit/:slug',component:ArticleUpdateComponent,resolve:{article:ArticleResolverService},canActivate:[AuthenticationGuardService]},
    {path:':slug',component:ArticleComponent,resolve:{article:ArticleResolverService}}
]
@NgModule({
    imports:[CommonModule,
    RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class ArticleRoutingModule{
    
}