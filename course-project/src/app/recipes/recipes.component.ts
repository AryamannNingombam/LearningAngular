import { Component, OnInit, OnDestroy } from '@angular/core';

import { RecipeService } from '../Services/recipes.services'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent  {
  
  


  constructor() { }

 

}
