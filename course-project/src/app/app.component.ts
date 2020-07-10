import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { ActivateService } from './test-component/user/user-activate.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('f') formChild: NgForm;
  aOrNot = false;
  mySubject: Subscription;
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

  suggestUserName() {
    const suggestedName = 'Superuser';
  }
  onSubmit() {
  
    console.log(this.formChild);
    if (!this.formChild.valid) {
      alert('Not Valid!');
    }
  }


}
