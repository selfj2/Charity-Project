import { Injectable } from "@angular/core";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root"
})
export class SearchService {
  private searchResults: any[] = [];

  constructor(private api: ApiService) {}
}
