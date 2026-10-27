import { Directive, HostBinding, signal } from '@angular/core';

@Directive({
  selector: '[appFontSize]',
})
export class FontSize {
  actualSize = 14;
  @HostBinding('style.fontSize') size = this.actualSize.toString() + 'px';
  setSize(size:number){
    if (this.actualSize<8) return;
    this.actualSize = size; 
    this.size=this.actualSize.toString() + 'px';
  }
  increase(){  
    this.actualSize += 2; 
    this.size=this.actualSize.toString() + 'px';
  }
  decrease(){  
    if (this.actualSize<=8) return;
    this.actualSize -= 2; 
    this.size=this.actualSize.toString() + 'px'; 
  }
}
