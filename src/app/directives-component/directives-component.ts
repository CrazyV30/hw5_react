import { Component } from '@angular/core';
import { TextColor } from '../directives/text-color';
import { Highlight } from '../directives/highlight';

@Component({
  imports: [TextColor, Highlight],
  selector: 'app-directives-component',
  styleUrl: './directives-component.css',
  templateUrl: './directives-component.html',
})
export class DirectivesComponent {}
