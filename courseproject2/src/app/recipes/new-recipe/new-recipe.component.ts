import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Params, Router } from '@angular/router';
import { FormGroup, FormControl,Validators, FormArray } from '@angular/forms';
import { RecipeService } from 'src/app/Services/recipes.services';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  constructor(private route: ActivatedRoute,private recipeService   : RecipeService,private router  : Router) { }
  id: number;
  editMode = false;
  recipeForm  : FormGroup;
  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['recipeId'];
      
      this.editMode = data['recipeId'] != null;
      this.initForm();
      
    }
    )
    
    
  }
  private initForm(){
    
    let recipeName = '';
    let imagePath = '';
    let desc = '';
    let ingredientsArray = new FormArray([]);
    if (this.editMode){
      const recipeToEdit = this.recipeService.getRecipe(this.id);
      recipeName = recipeToEdit.name;
      imagePath = recipeToEdit.imagePath;
      desc  = recipeToEdit.description;
    
    
        for (let ingredient of recipeToEdit.ingredients){
          ingredientsArray.push(new FormGroup({
            'name' : new FormControl(ingredient.name,[Validators.required]),
            'amount' : new FormControl( ingredient.amount,[Validators.required,this.checkNegative]),

          }))
        }
   
    }
    this.recipeForm = new FormGroup({
      'name'  : new FormControl(recipeName,[Validators.required]),
      'imagePath' :  new FormControl(imagePath,[Validators.required]),
      'description' :  new FormControl(desc,[Validators.required]),
      'ingredients' : ingredientsArray

    });
  }
  onSubmit(){
    let recipeName = this.recipeForm.value['name'];
    let recipeImage   = this.recipeForm.value['imagePath'];
    let recipeDesc = this.recipeForm.value['description'];
    let recipeIngredients = [];
    for (let ing of this.recipeForm.value['ingredients']){
      recipeIngredients.push(new Ingredient(ing.name,parseInt(ing.amount)))
    }

    const newRecipe= new Recipe(recipeName,recipeDesc,recipeImage,recipeIngredients)
    
    if (this.editMode){
      this.recipeService.updateRecipe(this.id,newRecipe);

    } else{
      this.recipeService.addRecipe(newRecipe);
    }
    this.router.navigate(['../',],{relativeTo : this.route});

  }
  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name' : new FormControl('',[Validators.required]),
      'amount' : new FormControl('',[Validators.required,this.checkNegative])
    }))
  }
  checkNegative(control : FormControl){
    if (parseInt(control.value) <= 0){
      return {'negativeValue' : true}
    } 
    return null
  }
onCancel(){
  this.router.navigate(['../',],{relativeTo : this.route});

}
onDeleteIngredient(index  : number){
  (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
}
}

