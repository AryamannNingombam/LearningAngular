import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../Services/shoppinglist.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingchangedSubs: Subscription;
  private editingSubs: Subscription;
 
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingchangedSubs =  this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients
    });
    this.editingSubs = this.shoppingListService.editingEvent.subscribe((ingredient: Ingredient) => {
      this.shoppingListService.addIngredient(ingredient)

    })
  }
  ngOnDestroy(): void {
    this.ingchangedSubs.unsubscribe();
    this.editingSubs.unsubscribe();


  }
  startEditing(index  : number){
    this.shoppingListService.startEditingItem.next(index);
  }

}
