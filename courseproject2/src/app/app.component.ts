import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ActivateService } from './test-component/user/user-activate.service';
import { Subscription } from 'rxjs';
import { NgForm, NgModel,
   NgModelGroup, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  genders = ['Male', 'Female', 'Other'];
   @ViewChild('f') formTDData : FormData;
  
 
  constructor(private activationService: ActivateService) {
   
   }
 
  ngOnInit() {
    //this.mySubject = this.activationService.activateEmmitter.subscribe((value: boolean) => {
     // this.aOrNot = value;
    //
   // })
    //Delete This
    this.signUpForm  = new FormGroup({
      'userData' : new FormGroup({
        'username' : new FormControl(null,[Validators.required]),
        'email' : new FormControl(null,[Validators.required,Validators.email]),
      })
      ,   
      
         'gender' : new FormControl('Male'),


    });


  }
  ngOnDestroy() {
    //this.mySubject.unsubscribe()
  }
  onSubmit() {
    console.log('Submitted Reactive.');
    console.log(this.signUpForm);



  }
  onSubmitTD(){
      console.log('Submitted TD.');
      console.log(this.formTDData);
  }



   


}
