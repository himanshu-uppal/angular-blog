import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {Routes,RouterModule} from '@angular/router'
import { ArticleCreateComponent } from './article-create.component';

const routes:Routes = [
    {path:'',component:ArticleCreateComponent}
]
@NgModule({
    imports:[CommonModule,
    RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class ArticleRoutingModule{
    
}