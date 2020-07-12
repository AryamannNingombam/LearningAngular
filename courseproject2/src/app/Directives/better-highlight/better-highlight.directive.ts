import { HostBinding,Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  ngOnInit() {
    this.backgroundColor = 'red'
  }
  
  @HostListener('mouseenter') mouseover(eventData: Event) {
    
    this.backgroundColor = 'blue';
  }
  @HostListener('mouseout') mouseout() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
  }
  @HostListener('click') click(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'green');
    console.log(eventData);
  }
}
