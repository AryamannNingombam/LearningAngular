import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, } from 'rxjs';
import { map,filter } from 'rxjs/operators'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private myObservable: Subscription
  constructor() { }

  ngOnInit() {
    const customIntervalObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {

  
        if (count === 3) {
          observer.complete();
          console.log('DOne');
        }
        observer.next(count);
        count++;
    
       
      }, 1000)
    });

   

    this.myObservable = customIntervalObservable.pipe(filter(data => {
      return +data > 0
    }), map(data => {
      return `Round : ${+data + 1}`;
    })).subscribe((data) => {
      console.log(data);

    }, error => {
        alert(error);
    }, () => {
    alert('Completed')});

  }
  ngOnDestroy() :void {
    this.myObservable.unsubscribe();
  }

}
