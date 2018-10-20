import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable()
export class TagService{
    constructor(private http:HttpClient){}

    getTags(){
        return this.http.get('https://conduit.productionready.io/api/tags')
    }

}