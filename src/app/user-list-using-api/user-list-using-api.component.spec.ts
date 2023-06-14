import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListUsingAPIComponent } from './user-list-using-api.component';

describe('UserListUsingAPIComponent', () => {
  let component: UserListUsingAPIComponent;
  let fixture: ComponentFixture<UserListUsingAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserListUsingAPIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserListUsingAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
