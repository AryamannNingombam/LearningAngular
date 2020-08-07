import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingListService } from './Services/shoppinglist.service';
import { AppRoutingModule } from './app-routing.module';
import { RecipeDetailResolver } from './recipes/recipe-detail/recipe-detail-resolver.service';
import { RecipeService } from './Services/recipes.services';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ShoppingRoutingModule} from './shopping-routing.module';
import {ShoppingListModule} from './shopping-list/shoppinglist.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
   FormsModule,
 AppRoutingModule,
    HttpClientModule,

    ShoppingRoutingModule,
    ShoppingListModule,
    SharedModule
 
  ],
  providers: [ 
     ShoppingListService, RecipeDetailResolver, RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
