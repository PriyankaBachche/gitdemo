import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssHwComponent } from './ass-hw.component';

describe('AssHwComponent', () => {
  let component: AssHwComponent;
  let fixture: ComponentFixture<AssHwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssHwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssHwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
