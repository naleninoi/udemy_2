import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defBackColor: string = 'transparent';  
  @Input() highlightBackColor: string = 'blue';

  @Input() defFontColor: string = 'black';  
  @Input() highlightFontColor: string = 'white';

  @HostBinding('style.color') fontColor: string = this.defFontColor;
 
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2) { }

  ngOnInit(): void {
  //   this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.highlightBackColor);
    this.fontColor = this.highlightFontColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', this.defBackColor);
    this.fontColor = this.defFontColor;
  }


}
