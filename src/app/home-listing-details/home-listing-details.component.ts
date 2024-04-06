import { Component } from '@angular/core';
import { HomeListing } from '../home-listing';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHomeListingService } from '../api-home-listing.service';

@Component({
  selector: 'app-home-listing-details',
  templateUrl: './home-listing-details.component.html',
  styleUrl: './home-listing-details.component.css'
})
export class HomeListingDetailsComponent {
  homeListDetails: HomeListing = new HomeListing();

  constructor(private _activatedRoute: ActivatedRoute,
    private _api: ApiHomeListingService,
    private router: Router) {
  }

  ngOnInit() {
    let id = this._activatedRoute.snapshot.params["id"];
    this._api.getByID(id).subscribe((res: any) => {
      this.homeListDetails = res;
      console.log(this.homeListDetails);
    });
  }

  delete() {
    let id = this._activatedRoute.snapshot.params["id"];
    this._api.deleteByID(id).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['HomeList']);
    });
  }
}
