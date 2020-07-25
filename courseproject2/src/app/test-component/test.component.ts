import { Component } from '@angular/core';
import    { OnInit } from '@angular/core';
import {HttpEventType} from '@angular/common/http'
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { PostService } from './posts.service';

interface Post{
  title : string,
  content  : string,
  id? : string
}

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{
 loadedPosts : Post[] = [];
 myForm  : FormGroup ;
 isFetching = false;
 deletionSuccessful = false;
error = null;
  constructor(private postService  : PostService) {}
  onCreatePost( ) {
    // Send Http request
    this.postService.createAndStorePost(this.myForm.value['title'],this.myForm.value['content']);
    this.loadedPosts.push(this.myForm.value);
    this.deletionSuccessful = false;
    this.myForm.reset();
  }


  onFetchPosts() {
    // Send Http request
    this.isFetching = true
    
    this.postService.fetchPosts().subscribe((data)=>{
      this.loadedPosts = data;
      this.isFetching = false;
    },error=>{
      this.error  =  error.message;
      this.isFetching = false;
      this.deletionSuccessful = false;
    })
  }



  onClearPosts() {
    // Send Http request

    this.postService.deletePosts().subscribe(event=>{
      if (event.type === HttpEventType.Sent){
        this.deletionSuccessful = true;

      }
    });
  this.loadedPosts = [];
  }
 
  ngOnInit() {
   
 this.myForm = new  FormGroup({
  'title' : new FormControl('',[Validators.required]),
  'content' : new FormControl('',[Validators.required])
})
this.isFetching = true
this.postService.fetchPosts().subscribe((data)=>{
  this.loadedPosts = data;
  this.isFetching = false;
this.deletionSuccessful = false;
},error=>{
  console.log(error);
  this.isFetching  =false;
  this.error  =  error.error.error;
})


  }
  ngOnDestroy() {

  }
  errorDismiss(){
    this.error = null;
  }
  deleteDismiss(){
    this.deletionSuccessful = false;
  }



}
