import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() numberFired = new EventEmitter<number>();
  myNumber = 1;
  playPause;
  oddNumbers= [];
  evenNumbers= [];
  updatePauseButton = false;


  constructor() {

    setInterval(() => {
      this.myNumber++;
    }, 1000)


  }
 

  ngOnInit(): void {
  }
  startGame() {
    this.updatePauseButton = true;
    this.playPause = setInterval(() => {
      let newNumber = Math.ceil(Math.random() * 100);
      newNumber % 2 === 0 ? this.evenNumbers.push(newNumber) : this.oddNumbers.push(newNumber)
      this.numberFired.emit(newNumber);
      console.log(this.evenNumbers);
      console.log(this.oddNumbers);
      
    }, 1000)
  }
  pauseGame() {
    clearInterval(this.playPause);
  }

}
