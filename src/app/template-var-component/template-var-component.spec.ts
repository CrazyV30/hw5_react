import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateVarComponent } from './template-var-component';

describe('TemplateVarComponent', () => {
  let component: TemplateVarComponent;
  let fixture: ComponentFixture<TemplateVarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateVarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TemplateVarComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
