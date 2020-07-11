import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ActivateService } from './test-component/user/user-activate.service';
import { Subscription } from 'rxjs';
import { NgForm, NgModel, NgModelGroup, FormGroup } from '@angular/forms';
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
  reasons = ['Work','Personal','Counselling','Others']
  showThanks = false;
  @ViewChild('formData') formData: NgForm;
  constructor(private activationService: ActivateService) { }
 
  ngOnInit() {
    //this.mySubject = this.activationService.activateEmmitter.subscribe((value: boolean) => {
     // this.aOrNot = value;
    //
   // })
  }
  ngOnDestroy() {
    //this.mySubject.unsubscribe()
  }
  onSubmit() {
   
    if (this.formData.valid) {
      this.showThanks = true;
    }
    console.log(this.showThanks);
    this.formData.reset();


  }



   


}
