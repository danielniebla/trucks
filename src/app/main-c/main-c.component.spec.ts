import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCComponent } from './main-c.component';

describe('MainCComponent', () => {
  let component: MainCComponent;
  let fixture: ComponentFixture<MainCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCComponent]
    });
    fixture = TestBed.createComponent(MainCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
