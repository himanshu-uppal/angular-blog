import {Component, Input} from '@angular/core'
import { ISingleComment, AuthenticationService, CommentService } from '../../core';
import { Router } from '@angular/router';
@Component({
    selector:'article-comments',
    templateUrl:'./show-comments.component.html'
    
})
export class ShowCommentsComponent{
    @Input() comments:ISingleComment[]
    @Input() slug:string
    commentAuthor:string

    constructor(private router:Router,private authenticationService:AuthenticationService,private commentService:CommentService){}

    ngOnInit(){
        this.authenticationService.getCurrentUser().subscribe(data=>{
            this.commentAuthor = data.user.username
        })
        }

        deleteComment(id:number){
            this.commentService.deleteComment(this.slug,id).subscribe(data=>{
                this.router.navigate([''])
            })

        }
}