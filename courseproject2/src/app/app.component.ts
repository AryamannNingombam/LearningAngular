import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ActivateService } from './test-component/user/user-activate.service';
import { Subscription } from 'rxjs';
import { NgForm, NgModel, NgModelGroup, FormGroup, FormControl } from '@angular/forms';
interface userData {
  username: string,
  email: string,
  secretQuestion: string,
  answer: string,
  gender  : string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  genders = ['Male', 'Female', 'Other'];
  
  @ViewChild('f') f: NgForm;
  constructor(private activationService: ActivateService) {
    console.log('In');
   }
 
  ngOnInit() {
    //this.mySubject = this.activationService.activateEmmitter.subscribe((value: boolean) => {
     // this.aOrNot = value;
    //
   // })
    //Delete This
    this.signUpForm  = new FormGroup({
         'username' : new FormControl(null),
         'email' : new FormControl(null),
         'gender' : new FormControl('Male'),


    });


  }
  ngOnDestroy() {
    //this.mySubject.unsubscribe()
  }
  onSubmit() {
    console.log(this.f);




  }



   


}
