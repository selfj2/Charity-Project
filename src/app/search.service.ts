import { Injectable } from '@angular/core';
import { SearchInterface } from './search-interface';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  // private searchInterface: SearchInterface; 
  private searchResults: any[] = []; 

  constructor(private api: ApiService) { }

 
  setOptions(options: string) {
    // this.searchInterface = options;
    this.searchResults = []; 
    this.performSearch(options);
  }

  
  getOptions(): SearchInterface {
    return this.searchInterface;
  }


  getSearchResults(): any[] {
    return this.searchResults;
  }


  getCharity(name: string): any {
    return this.searchResults.find(charity => charity.label.toLowerCase() === name.toLowerCase())
  }


  private performSearch(options:string): void {
    this.api.getData(options).subscribe(this.handleResponse);
  }

  
  private handleResponse = (response: any): void => {
    console.log(response);
    this.searchResults = response;
    // for (let hit of response["hits"]) {
    //   this.searchResults.push(hit.charity);
    // }
  }
}
