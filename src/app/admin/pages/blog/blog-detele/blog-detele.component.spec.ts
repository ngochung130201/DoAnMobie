import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDeteleComponent } from './blog-detele.component';

describe('BlogDeteleComponent', () => {
  let component: BlogDeteleComponent;
  let fixture: ComponentFixture<BlogDeteleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDeteleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogDeteleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
