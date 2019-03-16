import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRendererPrac]',
})
export class RendererPracDirective implements OnInit {

  constructor (private renderer: Renderer2, private el: ElementRef) {
    console.log('dir called');

  }
  public ngOnInit (): void {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('Hello world!');

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);
  }
}
