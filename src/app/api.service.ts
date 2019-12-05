import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SearchInterface } from './search-interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apikey: string = "f8770df6cb9b934e5ac6b7d2dcafee9e";
  appid: string = "90e661c1";
  apiUrl= "https://api.data.charitynavigator.org/v2/categories";

  constructor(private http: HttpClient) { }

  getData(options: string) {
    let searchUrl = this.apiUrl + `?q=${options}&app_id=${this.appid}&app_key=${this.apikey}&to=24`;
  console.log(searchUrl)

  // if (options.mailingAddress) {
  //   searchUrl += `&charity=${options.mailingAddress}`;
  // }

 
  // if (options.categoryName) {
  //   searchUrl += `&charity=${options.categoryName}`;
  // }

  return this.http.get(searchUrl);
  }
}
