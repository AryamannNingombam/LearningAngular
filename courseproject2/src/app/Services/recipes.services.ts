import { Recipe } from '../recipes/recipe.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Injectable()
export class RecipeService {
  recipeSelected = new Subject<Recipe>();
  recipesUpdated = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe('Chappati', 'Daily Food In India', 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/2_Chapati_warm_and_ready_to_be_eaten.jpg/320px-2_Chapati_warm_and_ready_to_be_eaten.jpg', [new Ingredient('Flour', 20), new Ingredient('Olive Oil',2)])
    , new Recipe('Bread Omelette', "Daily Breakfast For Me", 'https://media1.picsearch.com/is?DN47wl-WZs7xQTDRd42IptO0h4_98g2Xdxrq_w3opmk&height=201', [new Ingredient('Bread', 2), new Ingredient('Eggs', 2), new Ingredient('Cucumber', 1)]),
    new Recipe('Chicken', "Who Doesn't Want To Eat That?", 'https://media5.picsearch.com/is?DFqUsyIlCqtYy0XUyFV3kLKaHoqyUXnrSqXaLcI7sug&height=341', [new Ingredient('Chicken', 2), new Ingredient('Salt', 3), new Ingredient('Spices', 10), new Ingredient('Oil',6)])
   
  ];
  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes : Recipe[]){
    this.recipes = recipes;
    
    this.recipesUpdated.next(this.recipes);
  }

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredients(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
    this.recipesUpdated.next(this.recipes.slice());
  }
  getRecipe(id: number) {
    return this.recipes[id];
  }
  addRecipe(recipe   : Recipe){
    this.recipes.push(recipe);
    this.recipesUpdated.next(this.recipes.slice());;

  }
  updateRecipe(index : number,recipe : Recipe){
    this.recipes[index] = recipe;
    this.recipesUpdated.next(this.recipes.slice());;
  }
  deleteRecipe(index : number)
  {
    this.recipes.splice(index,1);
    this.recipesUpdated.next(this.recipes.slice());
    console.log(this.recipes);
  }
  getIndex(recipe : Recipe){
    return this.recipes.indexOf(recipe);
  }

}
