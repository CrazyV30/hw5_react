import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  @Input() appHighlight = '';
  @HostBinding('style.boxShadow') boxShadow=this.appHighlight;
  @HostListener('mouseover') changeShadow(){ this.boxShadow = this.appHighlight}
  @HostListener('mouseleave') clearShadow(){ this.boxShadow = ''}
}
