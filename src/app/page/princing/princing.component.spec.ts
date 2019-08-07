import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincingComponent } from './princing.component';

describe('PrincingComponent', () => {
  let component: PrincingComponent;
  let fixture: ComponentFixture<PrincingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
