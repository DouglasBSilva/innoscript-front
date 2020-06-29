import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocarouselComponent } from './promocarousel.component';

describe('PromocarouselComponent', () => {
  let component: PromocarouselComponent;
  let fixture: ComponentFixture<PromocarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
