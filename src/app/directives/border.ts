import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBorder]',
})
export class Border {
  @HostBinding('style.border') border='';
  setBorder(color: string, width: number){ this.border = width.toString() + 'px solid ' + color;  }
  resetBorder() { this.border = ''; }
}
