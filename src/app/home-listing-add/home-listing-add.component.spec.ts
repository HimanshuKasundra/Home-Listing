import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeListingAddComponent } from './home-listing-add.component';

describe('HomeListingAddComponent', () => {
  let component: HomeListingAddComponent;
  let fixture: ComponentFixture<HomeListingAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeListingAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeListingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
