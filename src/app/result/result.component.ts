import { Component, OnInit } from "@angular/core";
import { SearchService } from "../search.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnInit {
  charityResults: any[] = [];
  // test: boolean = false;

  constructor(private search: ApiService, private router: ActivatedRoute) {}

  ngOnInit() {
    // gets the parameters in the URL and uses them with the services method
    this.router.queryParams.subscribe(queryParams => {
      this.search.getData(queryParams).subscribe(data => {
        console.log(data);
        this.charityResults = data;
      });
    });
  }
}
