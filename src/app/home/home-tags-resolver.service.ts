import {Injectable} from '@angular/core'
import {Resolve} from '@angular/router'
import { TagService } from '../core';
import {map} from 'rxjs/operators'

 @Injectable()
export class HomeTagsResolver implements Resolve<any>{
    constructor(private tagService:TagService){
     }
    resolve(){
        console.log('resolving data')
        return this.tagService.getTags().pipe(map(tags =>tags))
        
     }
 } 