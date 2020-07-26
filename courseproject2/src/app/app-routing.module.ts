
import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router'
import { RecipesComponent } from './recipes/recipes.component';
import {RecipeResolverService} from './recipes/recipe-resolver.service'

import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDetailResolver } from './recipes/recipe-detail/recipe-detail-resolver.service';
import { NoRecipeShownComponent } from './recipes/no-recipe-shown/no-recipe-shown.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';
import {ShoppingListResolver} from './shopping-list/shopping-resolver.service';



const appRoutes: Routes = [
  
  {
    path: '', redirectTo: '/recipes', pathMatch : 'full'
  },
  {
    path: 'shopping-list', component: ShoppingListComponent,resolve : [ShoppingListResolver,RecipeResolverService]
  },
  {
    path: 'recipes', component: RecipesComponent, children: 
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

// const appRoutes : Routes = [
//   {path : '',component: TestComponent}
// ]





@NgModule(
  {

    imports: [
      //RouterModule.forRoot(appRoutes, { useHash : true })
      RouterModule.forRoot(appRoutes)
    ],
    exports: [
      RouterModule
    ]
 }

)
export class AppRoutingModule {



}
