import { Component, ViewChild } from '@angular/core';
import { Border } from '../directives/border';
import { FontSize } from '../directives/font-size';

@Component({
  imports: [Border, FontSize],
  selector: 'app-view-child-component',
  styleUrl: './view-child-component.css',
  templateUrl: './view-child-component.html',
})
export class ViewChildComponent {
  @ViewChild(FontSize) fontSize!:FontSize;

  increaseSize(){  this.fontSize.increase(); }
  dereaseSize(){  this.fontSize.decrease(); }
  setSize(size:number){ this.fontSize.setSize(size); }

  reset(){
    this.fontSize.setSize(14);
  }

  @ViewChild(Border) border!:Border;
  setBorder(color:string, size:number){ this.border.setBorder(color,size); }
  resetBorder(){ this.border.resetBorder(); }
}
