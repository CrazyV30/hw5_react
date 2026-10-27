import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentElComponent } from './component-el-component';

describe('ComponentElComponent', () => {
  let component: ComponentElComponent;
  let fixture: ComponentFixture<ComponentElComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentElComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentElComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
