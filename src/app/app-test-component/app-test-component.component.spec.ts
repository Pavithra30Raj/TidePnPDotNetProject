import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTestComponentComponent } from './app-test-component.component';

describe('AppTestComponentComponent', () => {
  let component: AppTestComponentComponent;
  let fixture: ComponentFixture<AppTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTestComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
