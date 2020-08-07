import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../Services/recipes.services'
import { Recipe } from '../recipes/recipe.model';
import { map, tap } from 'rxjs/operators';
import { ShoppingListService } from '../Services/shoppinglist.service';
import { Ingredient } from './ingredient.model';


@Injectable({providedIn : 'root'})
export class DataStoringService{
   private baseUrlRecipes = 'https://course-project-eea2a.firebaseio.com/recipes.json'
   private baseUrlShopping = 'https://course-project-eea2a.firebaseio.com/shopping.json'
   constructor(private http : HttpClient,private recipeService : RecipeService,private shoppingListService : ShoppingListService){}

   storeRecipes(){
      const recipes  = this.recipeService.getRecipes();
      
      return  this.http.put(this.baseUrlRecipes,recipes)


   }
   storeIngredients(){
      const ingredients = this.shoppingListService.getIngredients();
      return this.http.put(this.baseUrlShopping,ingredients);
   }




   fetchRecipes(){
     return this.http.get<Recipe[]>(this.baseUrlRecipes).pipe(map(recipes=>{

         return recipes.map(recipe=>{
            return {...recipe,ingredients : recipe.ingredients  ? recipe.ingredients : [] }})
      }),tap(recipes=>{

         this.recipeService.setRecipes(recipes);
      }))
   }

   fetchIngredients(){
      return this.http.get<Ingredient[]>(this.baseUrlShopping).pipe(tap(ings=>{
         
         this.shoppingListService.setIngredients(ings);
      }))
   }

}