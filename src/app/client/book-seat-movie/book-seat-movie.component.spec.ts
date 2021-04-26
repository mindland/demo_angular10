import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSeatMovieComponent } from './book-seat-movie.component';

describe('BookSeatMovieComponent', () => {
  let component: BookSeatMovieComponent;
  let fixture: ComponentFixture<BookSeatMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSeatMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSeatMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
