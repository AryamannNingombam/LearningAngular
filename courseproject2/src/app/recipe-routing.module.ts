import {NgModule} from '@angular/core';
import {RouterModule, Route} from '@angular/router';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {RecipesComponent} from './recipes/recipes.component';
import {NoRecipeShownComponent} from './recipes/no-recipe-shown/no-recipe-shown.component';
import {NewRecipeComponent} from './recipes/new-recipe/new-recipe.component';
import {RecipeDetailResolver} from './recipes/recipe-detail/recipe-detail-resolver.service';
import {RecipeResolverService} from './recipes/recipe-resolver.service';
import {ShoppingListResolver} from './shopping-list/shopping-resolver.service';
const appRoutes  : Route[] = [
    {
        path: '', component: RecipesComponent, children: 
          [{
            path: '', component: NoRecipeShownComponent
          },
            {
              path: 'new-recipe', component: NewRecipeComponent
            }
            ,
            {
    
              path: ':recipeId', component: RecipeDetailComponent, resolve: {gettingTheRecipe :  RecipeDetailResolver },
            
    
            },
            {
              path: ':recipeId/edit', component: NewRecipeComponent
            }
    
          ]
    ,resolve : [RecipeResolverService,ShoppingListResolver]
    
      }
]
@NgModule({

    imports : [RouterModule.forChild(appRoutes)],
    exports : [RouterModule]
})
export class RecipeRoutingModule{}