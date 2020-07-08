import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model'
import { RecipeService } from '../Services/recipes.services'
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  recipeDetails: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.recipeDetails = recipe;

    })
  }

}
