import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductschooseComponent } from './productschoose.component';

describe('ProductschooseComponent', () => {
  let component: ProductschooseComponent;
  let fixture: ComponentFixture<ProductschooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductschooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductschooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
