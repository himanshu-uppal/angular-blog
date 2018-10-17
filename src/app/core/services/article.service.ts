import {Injectable} from '@angular/core'
import {IArticles} from '../models'
import {Observable} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable()
export class ArticleService{
    constructor(private http:HttpClient){

    }
    getArticles():Observable<IArticles>{
        return this.http.get<IArticles>('https://conduit.productionready.io/api/articles')
    }

    // saveArticle(article){
    //     let options = {headers:new HttpHeaders({'Content-Type':'application/json'})}

    //     this.http.post<IArticle>()
    // }

}