import {Component, Input} from '@angular/core'
import { ISingleComment } from '../../core';
@Component({
    selector:'article-comments',
    templateUrl:'./show-comments.component.html'
    
})
export class ShowCommentsComponent{
    @Input() comments:ISingleComment[]
}