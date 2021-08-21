import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplistmainComponent } from './emplistmain.component';

describe('EmplistmainComponent', () => {
  let component: EmplistmainComponent;
  let fixture: ComponentFixture<EmplistmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplistmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmplistmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
