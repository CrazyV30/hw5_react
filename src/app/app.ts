import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DirectivesComponent } from './directives-component/directives-component';
import { ViewChildComponent } from './view-child-component/view-child-component';
import { TemplateVarComponent } from './template-var-component/template-var-component';
import { ComponentElComponent } from './component-el-component/component-el-component';

@Component({
  imports: [RouterOutlet, DirectivesComponent, ViewChildComponent,TemplateVarComponent, ComponentElComponent],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('hw5');
}
