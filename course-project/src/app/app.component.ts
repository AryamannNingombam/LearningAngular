import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ActivateService } from './test-component/user/user-activate.service';
import { Subscription } from 'rxjs';
import { NgForm, NgModel } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('f') formChild: NgForm;
  @ViewChild('email') formEmailChild: NgModel;
  defaultQuestion = 'pet';
  emailInput = '';
  suggestUser = false;
  mySubject: Subscription;
  value = 'Namaste';
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
  showSuggestion() {
    this.suggestUser = true;
  }
  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  onSubmit() {
    console.log(this.formEmailChild);
    console.log(this.formChild);
    if (!this.formChild.valid) {
      alert('Not Valid!');
    }
  }


}
