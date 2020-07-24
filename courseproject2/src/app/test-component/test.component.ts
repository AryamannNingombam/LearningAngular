import { Component, ViewChild } from '@angular/core';
import    { OnInit } from '@angular/core';

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

  constructor(private postService  : PostService) {}
  onCreatePost( ) {
    // Send Http request
    this.postService.createAndStorePost(this.myForm.value['title'],this.myForm.value['content']);
  }


  onFetchPosts() {
    // Send Http request
    this.isFetching = true
    this.postService.fetchPosts().subscribe((data)=>{
      this.loadedPosts = data;
      this.isFetching = false;
    })
  }



  onClearPosts() {
    // Send Http request
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
})


  }
  ngOnDestroy() {

  }




}
