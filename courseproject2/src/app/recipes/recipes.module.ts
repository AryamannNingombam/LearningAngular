import {NgModule} from "@angular/core";
import {RecipesComponent} from './recipes.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeItemComponent} from './recipe-list/recipe-item/recipe-item.component';
import {NoRecipeShownComponent} from './no-recipe-shown/no-recipe-shown.component';
import {NewRecipeComponent} from './new-recipe/new-recipe.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {RecipeRoutingModule} from '../recipe-routing.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    declarations  : [
        RecipesComponent,
        RecipeListComponent,
        RecipeDetailComponent,
        RecipeItemComponent,
    NoRecipeShownComponent,
    NewRecipeComponent

    ],
    imports : [


        RouterModule,
        ReactiveFormsModule,
        RecipeRoutingModule,
        SharedModule

    ],

})
export class RecipeModule{}