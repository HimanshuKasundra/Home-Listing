import { Component } from '@angular/core';
import { ApiHomeListingService } from '../api-home-listing.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home-listing-add',
  templateUrl: './home-listing-add.component.html',
  styleUrl: './home-listing-add.component.css'
})
export class HomeListingAddComponent {
id: number = -1
  constructor(private _api: ApiHomeListingService, private router: Router, private _activatedRoute: ActivatedRoute) {

  }

  myForm = new FormGroup({
      ListingID:new FormControl(""),
      PropertyName: new FormControl(""),
      RentAmount:new FormControl(""),
      Address: new FormControl(""),
      ContactDetails: new FormControl(""),
      PropertyImage: new FormControl(""),

  })

  submit() {
    if (this.id === -1) {
      this._api.insert(this.myForm.value).subscribe((res) => {
        this.router.navigate(['HomeList'])
      })
    } else {
      this._api.edit(this.id, this.myForm.value,).subscribe((res) => {
        this.router.navigate(['HomeList'])
      })
    }

    console.log(this.myForm)
  }

  ngOnInit(): void {
    if (this._activatedRoute.snapshot.params["id"] != null) {
      this.id = this._activatedRoute.snapshot.params["id"];
    }
    this._api.getByID(this.id).subscribe((res: any) => {

      this.myForm.controls.ListingID.setValue(res.ListingID)
      this.myForm.controls.PropertyName.setValue(res.PropertyName)
      this.myForm.controls.RentAmount.setValue(res.RentAmount)
      this.myForm.controls.Address.setValue(res.Address)
      this.myForm.controls.ContactDetails.setValue(res.ContactDetails)
      this.myForm.controls.PropertyImage.setValue(res.PropertyImage)
    });
  }
}
