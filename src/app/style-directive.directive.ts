import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyleDirective]'
})
export class StyleDirectiveDirective implements OnInit{

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(): void {
   this.elRef.nativeElement.style.color='red'
  }

  // @HostListener('mouseover') mouseOver(){
  //   this.elRef.nativeElement.style.color='yellow'
  // }

  // @HostListener('mouseleave') mouseLeave(){
  //   this.elRef.nativeElement.style.color='green'
  // }

  // @HostListener('mouseenter') mouseEnter(){
  //  this.elRef.nativeElement.style.fontSize="20px"
  //  this.elRef.nativeElement.style.color="blue"
  // }

}
