import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivateService } from './test-component/user/user-activate.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'course-project';
  aOrNot = false;
  mySubject: Subscription;
  constructor(private activationService: ActivateService) { }

  ngOnInit() {
    this.mySubject = this.activationService.activateEmmitter.subscribe((value: boolean) => {
      this.aOrNot = value;

    })
  }
  ngOnDestroy() {
    this.mySubject.unsubscribe()
  }


}
