import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router'
import { RecipesComponent } from './recipes/recipes.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AppComponent } from './app.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDetailResolver } from './recipes/recipe-detail/recipe-detail-resolver.service';
import { NoRecipeShownComponent } from './recipes/no-recipe-shown/no-recipe-shown.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';
import { HomeComponent } from './test-component/home/home.component';
import { UserComponent } from './test-component/user/user.component';
import { TestComponent } from './test-component/test.component';


// const appRoutes: Routes = [
  
//   {
//     path: '', redirectTo: '/recipes', pathMatch : 'full'
//   },
//   {
//     path: 'shopping-list', component: ShoppingListComponent
//   },
//   {
//     path: 'recipes', component: RecipesComponent, children: 
//       [{
//         path: '', component: NoRecipeShownComponent
//       },
//         {
//           path: 'new-recipe', component: NewRecipeComponent
//         }
//         ,
//         {

//           path: ':recipeId', component: RecipeDetailComponent, resolve: {gettingTheRecipe :  RecipeDetailResolver },
        

//         },
//         {
//           path: ':recipeId/edit', component: NewRecipeComponent
//         }

//       ]


//   }

// ]





const appRoutes: Routes = [
  { path: '', component : AppComponent }]

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
