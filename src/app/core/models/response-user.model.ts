import {IUser} from './user.model'
export interface IResponseUser{
  user:{
      id:number
    email:string
    token:string
    username:string
    bio:string
    image:string
    createdAt:string
    updatedAt:string
  }
}