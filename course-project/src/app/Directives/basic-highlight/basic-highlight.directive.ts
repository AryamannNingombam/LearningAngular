import { Input,Directive, ElementRef, OnInit,HostBinding,HostListener } from '@angular/core'


@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  @HostBinding('class') elementClass: string;


  constructor(private elementRef: ElementRef) 

  {
   
  }
  ngOnInit() {
    
  }
  @HostListener('click') click() {
    this.elementClass= 'anotherOne';
  }
 

}
