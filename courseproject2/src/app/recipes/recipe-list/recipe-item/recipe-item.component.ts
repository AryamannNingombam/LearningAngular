import { Component, OnInit, Input, } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../../Services/recipes.services';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input()recipeId: number;
  constructor(private recipeService: RecipeService) {
    
  }
  
  

  ngOnInit(): void {
   
    
  }
  
  


}
