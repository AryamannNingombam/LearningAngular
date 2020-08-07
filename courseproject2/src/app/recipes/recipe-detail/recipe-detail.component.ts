import { Component, OnInit, ComponentFactoryResolver, ViewChild, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model'

import { RecipeService } from '../../Services/recipes.services';
import { ActivatedRoute, Router } from '@angular/router';
import {AlertComponent} from '../../alert/alert.component';
import { PlaceHolderDirective } from 'src/app/shared/placeholder.directive';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  
})
export class RecipeDetailComponent implements OnInit,OnDestroy {
  recipeDetails: Recipe;
  showAlert = false;
  private closeSub : Subscription;
  @ViewChild(PlaceHolderDirective,{static : false}) alertHost : PlaceHolderDirective

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,private router: Router,private componentFactoryResolver : ComponentFactoryResolver) { }

  ngOnInit(): void {

    this.route.data.subscribe((data) => {
      this.recipeDetails = data['gettingTheRecipe'];
      
    });

   
    

  }
  addIngredients() {
    this.recipeService.addIngredients(this.recipeDetails.ingredients);
    this.showAlertFunc('Shopping List Updated!');
  }
deleteRecipe(){
  if (confirm('Do You Want To Delete This Recipe?')){
    let index = this.recipeService.getIndex(this.recipeDetails);
    this.recipeService.deleteRecipe(index);
    this.router.navigate(['../',],{relativeTo : this.route})
 
  } 


}

onHandleError(){
  this.showAlert = false;

}
private showAlertFunc(message : string){
  //const alertComp = new AlertComponent() #DOES NOT WORK
  this.showAlert = true;
  const alertComponentFactory =  this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
const hostViewContainerRef = this.alertHost.viewContainerRef;
hostViewContainerRef.clear();
const componentRef  = hostViewContainerRef.createComponent(alertComponentFactory);
componentRef.instance.message = message;
this.closeSub =   componentRef.instance.close.subscribe(()=>{

  this.closeSub.unsubscribe();
  hostViewContainerRef.clear();
  this.showAlert = false;
})
}
ngOnDestroy(){
  if (this.closeSub){
    this.closeSub.unsubscribe();
  }
  
}

}
