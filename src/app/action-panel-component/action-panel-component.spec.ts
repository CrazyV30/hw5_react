import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionPanelComponent } from './action-panel-component';

describe('ActionPanelComponent', () => {
  let component: ActionPanelComponent;
  let fixture: ComponentFixture<ActionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionPanelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionPanelComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
