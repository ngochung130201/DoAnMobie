import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDeleteComponent } from './cart-delete.component';

describe('CartDeleteComponent', () => {
  let component: CartDeleteComponent;
  let fixture: ComponentFixture<CartDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
