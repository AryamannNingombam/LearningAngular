import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Params } from '@angular/router';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.css']
})
export class NewRecipeComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id: number;
  editMode = false;
  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['recipeId'];
      
      this.editMode = data['recipeId'] != null;
      
    }
    )
    
    
  }

}
