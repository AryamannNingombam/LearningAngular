import {NgModule} from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';

import { ShoppingRoutingModule } from '../shopping-routing.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import  {SharedModule} from '../shared/shared.module';
@NgModule({
    
declarations : [
    ShoppingEditComponent,
    ShoppingListComponent,



],
imports :   [
SharedModule,
    ReactiveFormsModule,
    ShoppingRoutingModule,

]

})
export class ShoppingListModule{}