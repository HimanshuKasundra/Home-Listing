import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeListingComponent } from './home-listing/home-listing.component';
import { HomeListingAddComponent } from './home-listing-add/home-listing-add.component';
import { HomeListingDetailsComponent } from './home-listing-details/home-listing-details.component';

const routes: Routes = [
    {path:"", component:HomeComponent},
  { path: "about", component: AboutComponent },
  {path:"contact",component:ContactComponent},
  { path: "HomeList", component: HomeListingComponent },
  { path: "HomeList/add", component: HomeListingAddComponent },
  { path: "HomeList/edit/:id", component: HomeListingAddComponent },
  { path: "HomeList/:id", component: HomeListingDetailsComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
