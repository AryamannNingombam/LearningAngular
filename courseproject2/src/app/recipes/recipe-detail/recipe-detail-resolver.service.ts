import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recipe } from '../recipe.model';
import { Observable } from 'rxjs';
import { RecipeService } from '../../Services/recipes.services';
import { Injectable } from '@angular/core';


@Injectable()
export class RecipeDetailResolver implements Resolve<Recipe>{
  constructor(private recipeService: RecipeService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Recipe> | Promise<Recipe> | Recipe {
    let recipeToFind= this.recipeService.getRecipe(parseInt(route.params['recipeId']) -1)

    return recipeToFind
  }

}
