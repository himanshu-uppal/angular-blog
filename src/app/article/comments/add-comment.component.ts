import {Component, Input} from '@angular/core'
import { AuthenticationService, CommentService } from 'src/app/core';
import { Router } from '@angular/router';
@Component({
    selector:'add-comment',
    templateUrl:'./add-comment.component.html'
    
})
export class AddCommentComponent{
    @Input() slug:string
    body:string
    

    constructor(private router:Router,private authenticationService:AuthenticationService,private commentService:CommentService){}

    addComment(formValues){
       // console.log(this.slug)
       this.authenticationService.getCurrentUser().subscribe(data=>{
            this.commentService.addComment(this.slug,formValues.body).subscribe(data=>{
                this.router.navigate([''])               
                
            })
        })
           
    }
   
}