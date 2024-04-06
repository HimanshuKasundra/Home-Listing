import { Component } from '@angular/core';
import { HomeListing } from '../home-listing';
import { ApiHomeListingService } from '../api-home-listing.service';

@Component({
  selector: 'app-home-listing',
  templateUrl: './home-listing.component.html',
  styleUrl: './home-listing.component.css'
})
export class HomeListingComponent {
  listing: HomeListing[] = [];
  constructor(private _api: ApiHomeListingService) {
  }

  ngOnInit(): void {
    this._api.getAll().subscribe((res: any) => {
      this.listing = res;
      console.log(this.listing);
    })
  }

  delete(id: any) {
    this._api.deleteByID(id).subscribe((res: any) => {
      console.log(res);
      this.ngOnInit()
    });
  }
}
