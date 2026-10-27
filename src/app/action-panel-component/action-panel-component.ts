import { Component, ContentChild, ElementRef } from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-action-panel-component',
  styleUrl: './action-panel-component.css',
  templateUrl: './action-panel-component.html',
})
export class ActionPanelComponent {
  @ContentChild('actionButton') btn!:ElementRef;

  disabledBtn(){
    this.btn.nativeElement.disabled = true; 
  }

  enabledBtn(){
    this.btn.nativeElement.disabled = false; 
  }
}
