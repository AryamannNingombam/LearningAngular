import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import {map,tap} from 'rxjs/operators';

interface Post{
    title : string,
    content  : string,
    id? : string
  }
@Injectable()
export class PostService{
    constructor(private http : HttpClient){}
    createAndStorePost(title:string,content:string){
        const post : Post = {title : title,content  : content}

  this.http.post<{name : string}>('https://course-test-bfba8.firebaseio.com/posts.json',post,{
    observe : 'response'
  }).subscribe(
    responseData=>{
      console.log(responseData);
    }
  )
    }
    fetchPosts(){
        //Send Request
       
       return this.http.get<Post[]>('https://course-test-bfba8.firebaseio.com/posts.json').pipe(map((responseData)=>{
      const postsArray : Post[] = [];
     
      for (let key in responseData){
        
        if (responseData.hasOwnProperty(key)){
          postsArray.push({...responseData[key],id : key});
        }
        
      }
      return postsArray;
    }))
    
    }

    deletePosts(){
      return this.http.delete('https://course-test-bfba8.firebaseio.com/posts.json',{

        observe  : 'response',
        

      }).pipe(tap((event)=>{
        console.log(event);
      }))
    }

}