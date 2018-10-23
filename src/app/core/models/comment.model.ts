import {IProfile} from './profile.model'
export interface ISingleComment{
    id:number
    createdAt:string
    updatedAt:string
    body:string
    author:IProfile
}
export interface IMultipleComments{
    comments:ISingleComment[]   
}
