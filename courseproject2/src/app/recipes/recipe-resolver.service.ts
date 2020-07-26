import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {Recipe} from './recipe.model'
import {DataStoringService} from '../shared/data-storing.service'
import { RecipeService } from '../Services/recipes.services';
@Injectable({providedIn : 'root'})
export class RecipeResolverService implements Resolve<Recipe[]>{
constructor(private dataStorageService : DataStoringService,private recipeService : RecipeService){}
    resolve(route  : ActivatedRouteSnapshot,state : RouterStateSnapshot){
        const recipes = this.recipeService.getRecipes();
        if (recipes.length === 0){
            return this.dataStorageService.fetchRecipes();
        } else{
            return recipes;
        }
        
        
    }
}