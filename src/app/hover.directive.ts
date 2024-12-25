import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hotelinventoryappHover]',
  standalone: true
})
export class HoverDirective implements OnInit{

   @Input() hotelinventoryappHover: string = 'lightgrey';

  constructor(private element: ElementRef, @Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.color
    // this.document.querySelector('')
    this.renderer.setStyle(this.element.nativeElement, "backgroundColor",
    this.hotelinventoryappHover
    )
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, "backgroundColor", 'lightgreen')
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, "backgroundColor",
      this.hotelinventoryappHover
    )
  }
}
