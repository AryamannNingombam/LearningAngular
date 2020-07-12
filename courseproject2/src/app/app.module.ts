import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { UnlessDirective } from './Directives/unless/unless.directive';
import { DropdownDirective } from './shared/dropdown.directive'
import { TestComponent } from './test-component/test.component'



import { ShoppingListService } from './Services/shoppinglist.service';


import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth-service';
import { AuthGuard } from './auth-guard.service';

import { RecipeDetailResolver } from './recipes/recipe-detail/recipe-detail-resolver.service';
import { RecipeService } from './Services/recipes.services';
import { NoRecipeShownComponent } from './recipes/no-recipe-shown/no-recipe-shown.component';
import { NewRecipeComponent } from './recipes/new-recipe/new-recipe.component';
import { UserComponent } from './test-component/user/user.component';
import { HomeComponent } from './test-component/home/home.component';




@NgModule({
  declarations: [
    DropdownDirective,
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    UnlessDirective,
    
    TestComponent,
   
NoRecipeShownComponent,
NewRecipeComponent,
UserComponent,
HomeComponent,


 
  
  ],
  imports: [
    BrowserModule,
   FormsModule,
    ReactiveFormsModule, AppRoutingModule,
    
 
  ],
  providers: [ /*CanDeactivateGuard*/ ShoppingListService, AuthService, AuthGuard, RecipeDetailResolver, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
