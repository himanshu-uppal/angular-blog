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

@NgModule({
    declarations:[ArticleCreateComponent,ArticleUpdateComponent,ArticleComponent],
    imports:[CommonModule,ArticleRoutingModule,FormsModule],
    providers:[ArticleService,ArticleResolverService,AuthenticationGuardService]

})
export class ArticleModule{

} 