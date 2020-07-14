import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ActivateService } from './test-component/user/user-activate.service';
import { Subscription, Observable } from 'rxjs';
import { NgForm, NgModel,
   NgModelGroup, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  signUpForm: FormGroup;
  genders = ['Male', 'Female', 'Other'];
   @ViewChild('f') formTDData : FormData;
  forbiddenUsernames = ['Test','Anna'];
 
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
        'username' : new FormControl(null,[Validators.required,this.forbiddenNames.bind(this)]),
        'email' : new FormControl(null,[Validators.required,Validators.email,],this.forbiddenEmails),
      })
      ,   
      
         'gender' : new FormControl('Male'),
 'hobbies' : new FormArray([]),

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

onAddHobby(){
  const control = new FormControl(null,[Validators.required]);
(<FormArray>this.signUpForm.get('hobbies')).push(control);

}
forbiddenNames(control : FormControl) : {[s : string] : boolean} {
  if (this.forbiddenUsernames.indexOf(control.value) > -1){
    return {'nameIsForbidden' : true};
  }
  return null;
  

}
forbiddenEmails(control :FormControl) :Observable<any> |Promise<any>{
  const promise = new Promise<any>((resolve,reject)=>{
    setTimeout(()=>{
      if (control.value === 'test@test.com'){
        resolve({'email is forbidden' :true})
      } else{
        resolve(null)
      }
    },1500)
  })
  return promise

}

   


}
