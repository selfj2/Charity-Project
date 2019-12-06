import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  apikey: string = "f8770df6cb9b934e5ac6b7d2dcafee9e";
  appid: string = "90e661c1";
  apiUrl = "https://api.data.charitynavigator.org/v2/organizations";
  pageSize: number = 25;

  constructor(private http: HttpClient) {}

  getData(queryParams: any): any {
    // construct an object used to define the parameters that will append to the base URL
    let parameters: any = {
      app_key: this.apikey,
      app_id: this.appid,
      pageSize: this.pageSize,
      search: queryParams.search,
      state: queryParams.state,
      city: queryParams.city
    };
    console.log(parameters);
    return this.http.get(this.apiUrl, { params: parameters });
  }
}
