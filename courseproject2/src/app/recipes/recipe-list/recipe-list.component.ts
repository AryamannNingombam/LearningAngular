import { Component, OnInit, OnDestroy, } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../Services/recipes.services'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],

})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes: Recipe[];
  subs  : Subscription;


  
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
   this.subs =  this.recipeService.recipesUpdated.subscribe((recipes : Recipe[])=>{
      this.recipes = recipes;
      
    })
  }
  ngOnDestroy(){
      this.subs.unsubscribe();
  }


}
