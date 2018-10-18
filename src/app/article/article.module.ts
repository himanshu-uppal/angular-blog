import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import { ArticleCreateComponent } from './article-create.component';
import {ArticleRoutingModule} from './article-routing.module'
import {FormsModule} from '@angular/forms'

@NgModule({
    declarations:[ArticleCreateComponent],
    imports:[CommonModule,ArticleRoutingModule,FormsModule]

})
export class ArticleModule{

}