import { Component, ContentChild, ElementRef } from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-card-component',
  styleUrl: './card-component.css',
  templateUrl: './card-component.html',
})
export class CardComponent {
  @ContentChild("cardTitle") title!: ElementRef;
  changeTitle(text:string){
    this.title.nativeElement.textContent = text;
  }
}
