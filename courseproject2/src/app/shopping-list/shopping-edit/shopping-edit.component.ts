import {  Component, OnInit, OnDestroy,  } from '@angular/core';
import { ShoppingListService } from '../../Services/shoppinglist.service';
import { Ingredient } from '../../shared/ingredient.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  addingShoppingForm : FormGroup;
  editingSubscription : Subscription;
  editMode = false;
  editingIndex  : number;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.addingShoppingForm = new FormGroup({
      'itemName'  : new FormControl(null,[Validators.required]),
      'amount' : new FormControl(null,[Validators.required,this.checkingNegative])
    })

   this.editingSubscription =   this.shoppingListService.startEditingItem.subscribe((index : number)=>{
 
      this.editMode =true;
      this.editingIndex = index;


    })


  }
ngOnDestroy(){
this.editingSubscription.unsubscribe();
}

  addIngredient() {
const values = this.addingShoppingForm.value;
    let newIngredient = new Ingredient(values['itemName'], parseInt(values['amount']))
    this.shoppingListService.editingEvent.next(newIngredient);
  }
  checkingNegative(control : FormControl) : {[s : string] : boolean}{
    if (parseInt(control.value) <=0 )
    {
      return {'negativeInput' : true}
    }
    return null

  }


}
