import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCategoryDeleteComponent } from './product-category-delete.component';

describe('ProductCategoryDeleteComponent', () => {
  let component: ProductCategoryDeleteComponent;
  let fixture: ComponentFixture<ProductCategoryDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCategoryDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCategoryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
