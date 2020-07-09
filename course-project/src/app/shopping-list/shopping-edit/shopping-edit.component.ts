import { Output, Component, OnInit, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { ShoppingListService } from '../../Services/shoppinglist.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  
  @ViewChild('nameInput') name1: ElementRef;
  @ViewChild('nameAmount') amount1: ElementRef;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }
  addIngredient() {

    let newIngredient = new Ingredient(this.name1.nativeElement.value, parseInt(this.amount1.nativeElement.value))
    this.shoppingListService.editingEvent.next(newIngredient);
  }


}
