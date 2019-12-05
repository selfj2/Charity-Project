import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  charityResults: any[] = [];

  constructor(private search: SearchService, private router: Router) { }

  ngOnInit() {
    this.getCharities();
  }

  getCharities() {
    this.charityResults = this.search.getSearchResults();
  }

}
