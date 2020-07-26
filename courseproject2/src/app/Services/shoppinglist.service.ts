import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs'


export class ShoppingListService {
  editingEvent = new Subject<Ingredient>();
  startEditingItem = new Subject<number>();
  ingredientsChanged = new Subject<Ingredient[]>()
  // private ingredients: Ingredient[] = [
  //   new Ingredient('Apples', 5),
  //   new Ingredient('Tomatoes', 10),

  // ];
private ingredients : Ingredient[] = [];
setIngredients(ingre : Ingredient[]){
  this.ingredients = ingre;
  this.ingredientsChanged.next(this.ingredients);

}

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  addIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  getIngredient(index  : number){
    return this.ingredients[index];
  }
  updateIngredient(index  : number,newIngredient : Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  deleteIngredient(index : number) : void{
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }


}
