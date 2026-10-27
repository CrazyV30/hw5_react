import { Component } from '@angular/core';
import { CardComponent } from '../card-component/card-component';
import { ActionPanelComponent } from '../action-panel-component/action-panel-component';

@Component({
  imports: [CardComponent, ActionPanelComponent],
  selector: 'app-component-el-component',
  styleUrl: './component-el-component.css',
  templateUrl: './component-el-component.html',
})
export class ComponentElComponent {}
