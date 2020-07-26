import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RecipeService} from '../Services/recipes.services'
import { Recipe } from '../recipes/recipe.model';


@Injectable({providedIn : 'root'})
export class DataStoringService{
   private baseUrl = 'https://course-project-eea2a.firebaseio.com/recipes.json'
   constructor(private http : HttpClient,private recipeService : RecipeService){}

   storeRecipes(){
      const recipes  = this.recipeService.getRecipes();
      return  this.http.put(this.baseUrl,recipes)

   }

   fetchRecipes(){
      this.http.get<Recipe[]>(this.baseUrl).subscribe(recipes =>{
         this.recipeService.setRecipes(recipes);
      });
   }

}