import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansioPpanelComponent } from './expansio-ppanel.component';

describe('ExpansioPpanelComponent', () => {
  let component: ExpansioPpanelComponent;
  let fixture: ComponentFixture<ExpansioPpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpansioPpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpansioPpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
