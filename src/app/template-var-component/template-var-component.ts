import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-template-var-component',
  styleUrl: './template-var-component.css',
  templateUrl: './template-var-component.html',
})
export class TemplateVarComponent {
  amountSymbols=0;
  countSymbols(val:string){
    this.amountSymbols=val.length;
  }

  type:string = 'password';
  changeVisibility(){
    if (this.type == 'password') this.type = 'text';
    else this.type = 'password';
  }
}
