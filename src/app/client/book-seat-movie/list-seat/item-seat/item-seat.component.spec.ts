import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSeatComponent } from './item-seat.component';

describe('ItemSeatComponent', () => {
  let component: ItemSeatComponent;
  let fixture: ComponentFixture<ItemSeatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemSeatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSeatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
