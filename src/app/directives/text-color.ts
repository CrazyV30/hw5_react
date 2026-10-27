import { Directive, Input, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
})
export class TextColor {
  @Input() appTextColor="black";
  @HostBinding('style.color') color=this.appTextColor;
  @HostListener('mouseover') changeColor(){ this.color = this.appTextColor}
  @HostListener('mouseleave') clearColor(){ this.color = 'black'}  
}
