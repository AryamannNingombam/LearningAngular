import { NgModule } from "@angular/core";
import {RouterModule,  Route} from '@angular/router';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import {RecipeResolverService} from './recipes/recipe-resolver.service';
import {ShoppingListResolver} from './shopping-list/shopping-resolver.service';


const appRoutes  : Route[] = [
    {
        path: 'shopping-list', component: ShoppingListComponent,resolve : [ShoppingListResolver,RecipeResolverService]
      },
    ]
@NgModule({
    imports  : [RouterModule.forChild(appRoutes),
   ],
    exports  : [RouterModule]
})
export class ShoppingRoutingModule{}