import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListingDetailsComponent } from './home-listing-details.component';

describe('HomeListingDetailsComponent', () => {
  let component: HomeListingDetailsComponent;
  let fixture: ComponentFixture<HomeListingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeListingDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeListingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
