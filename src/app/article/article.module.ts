import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { ArticleCreateComponent } from './article-create.component';
import {ArticleUpdateComponent} from './article-update.component'
import {ArticleRoutingModule} from './article-routing.module'
import {FormsModule} from '@angular/forms'
import {ArticleService} from '../core'
import {ArticleResolverService} from './article-resolver.service'

@NgModule({
    declarations:[ArticleCreateComponent,ArticleUpdateComponent],
    imports:[CommonModule,ArticleRoutingModule,FormsModule],
    providers:[ArticleService,ArticleResolverService]

})
export class ArticleModule{

}