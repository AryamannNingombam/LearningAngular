import {  Component, OnInit,  } from '@angular/core';
import { ShoppingListService } from '../../Services/shoppinglist.service';
import { Ingredient } from '../../shared/ingredient.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  addingShoppingForm : FormGroup;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.addingShoppingForm = new FormGroup({
      'itemName'  : new FormControl(null,[Validators.required]),
      'amount' : new FormControl(null,[Validators.required])
    })


  }
  addIngredient() {
const values = this.addingShoppingForm.value;
    let newIngredient = new Ingredient(values['itemName'], parseInt(values['amount']))
    this.shoppingListService.editingEvent.next(newIngredient);
  }


}
