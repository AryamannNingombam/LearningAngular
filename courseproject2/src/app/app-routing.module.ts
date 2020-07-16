import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router'
import { RecipesComponent } from './recipes/recipes.component';

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AppComponent } from './app.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDetailResolver } from './recipes/recipe-detail/recipe-detail-resolver.service';
import { NoRecipeShownComponent } from './recipes/no-recipe-shown/no-recipe-shown.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';


const appRoutes: Routes = [
  
  {
    path: '', redirectTo: '/recipes', pathMatch : 'full'
  },
  {
    path: 'shopping-list', component: ShoppingListComponent
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


  }

]






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
