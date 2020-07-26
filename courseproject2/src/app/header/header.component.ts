import { Component, OnInit } from '@angular/core';
import {DataStoringService} from '../shared/data-storing.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  constructor(private dataStoringService : DataStoringService) {}

  ngOnInit(): void {
  }
  
  saveRecipes(){
    this.dataStoringService.storeRecipes().subscribe(data=>{
      console.log(data);
    })
  }
fetchRecipes(){
  this.dataStoringService.fetchRecipes();
}

}
