import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiHomeListingService {

  constructor(private _http: HttpClient) {

  }
  apiURL = "http://localhost:3000/";

  getAll() {
    return this._http.get(this.apiURL);
  }

  getByID(id: any) {
    return this._http.get(this.apiURL + id);
  }

  deleteByID(id: any) {
    return this._http.delete(this.apiURL + id);
  }

  insert(form: any) {
    return this._http.post(this.apiURL, form);
  }

  edit(id: any, form: any) {
    return this._http.put(this.apiURL + id, form);
  }
}
