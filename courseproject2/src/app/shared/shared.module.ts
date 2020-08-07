import {NgModule} from '@angular/core';
import {AlertComponent} from '../alert/alert.component';
import {PlaceHolderDirective} from './placeholder.directive';
import {DropdownDirective} from './dropdown.directive';
import {CommonModule} from '@angular/common';
@NgModule({
    declarations  : [
        AlertComponent,

        PlaceHolderDirective,
        DropdownDirective
    ],
    imports  : [
        CommonModule

    ],
    exports : [  AlertComponent,

        PlaceHolderDirective,
        DropdownDirective,
        CommonModule

    ]
})
export class SharedModule{}