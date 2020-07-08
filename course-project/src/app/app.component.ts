import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';
  whatToShow = 'Recipes';
  getFiredNumber(num: number) {
    console.log(num);
  }
  checkEvent(event) {

    event === 'Recipe' ? this.whatToShow = 'Recipes' : this.whatToShow = 'Shopping';
  }

}
