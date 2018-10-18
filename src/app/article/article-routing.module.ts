import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {Routes,RouterModule} from '@angular/router'
import { ArticleCreateComponent } from './article-create.component';
import { ArticleUpdateComponent } from './article-update.component';

const routes:Routes = [
    {path:'',component:ArticleCreateComponent},
    {path:':slug',component:ArticleUpdateComponent}
]
@NgModule({
    imports:[CommonModule,
    RouterModule.forChild(routes)],
    exports:[RouterModule]

})
export class ArticleRoutingModule{
    
}