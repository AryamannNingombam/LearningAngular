import { Component, OnInit,Input } from '@angular/core';
import { Recipe } from '../recipe.model'
import { ShoppingListService } from '../../Services/shoppinglist.service';
import { RecipeService } from '../../Services/recipes.services';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  
})
export class RecipeDetailComponent implements OnInit {
  recipeDetails: Recipe

  constructor(private recipeService: RecipeService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.data.subscribe((data) => {
      this.recipeDetails = data['gettingTheRecipe'];
      
    });
   
   
    

  }
  addIngredients() {
    this.recipeService.addIngredients(this.recipeDetails.ingredients);

  }


}
