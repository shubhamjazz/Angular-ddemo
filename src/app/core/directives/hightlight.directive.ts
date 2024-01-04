import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHightlight]'
})
export class HightlightDirective {

  constructor( private elementRef: ElementRef) {
    console.log(this.elementRef)
    this.elementRef.nativeElement.style.background ='yellow'
   }

}
