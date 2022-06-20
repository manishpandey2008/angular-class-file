import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyleDirective]'
})
export class StyleDirectiveDirective implements OnInit{

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
  //  this.elRef.nativeElement.style.color='red'
  }


}
