import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../Services/shoppinglist.service';
import {DataStoringService} from '../shared/data-storing.service';

@Injectable({providedIn : 'root'})
export class ShoppingListResolver implements Resolve<Ingredient[]>{
constructor(private shoppingListService : ShoppingListService,private dataStoringService : DataStoringService){}

    resolve(router : ActivatedRouteSnapshot,state : RouterStateSnapshot){
        const ing = this.shoppingListService.getIngredients();
        if ( ing.length === 0){
            return  this.dataStoringService.fetchIngredients();
        } else{
            return ing;
        }
        
}
}