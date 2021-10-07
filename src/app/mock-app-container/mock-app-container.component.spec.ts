import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockAppContainerComponent } from './mock-app-container.component';

describe('MockAppContainerComponent', () => {
  let component: MockAppContainerComponent;
  let fixture: ComponentFixture<MockAppContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MockAppContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockAppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
