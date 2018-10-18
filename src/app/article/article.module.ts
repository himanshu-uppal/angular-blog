import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { ArticleCreateComponent } from './article-create.component';
import {ArticleRoutingModule} from './article-routing.module'

@NgModule({
    declarations:[ArticleCreateComponent],
    imports:[CommonModule,ArticleRoutingModule]

})
export class ArticleModule{

}