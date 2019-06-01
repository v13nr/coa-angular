import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCoasComponent } from './list-coas.component';

describe('ListCoasComponent', () => {
  let component: ListCoasComponent;
  let fixture: ComponentFixture<ListCoasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCoasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCoasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
