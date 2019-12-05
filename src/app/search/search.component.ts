import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  charityOptions: any[] = [
    { name: "Food", categoryName: "food"},
    { name: "Toys", categoryName: "toys"},
    { name:"Clothes", categoryName: "clothes" }
  ];
  // mailingAddress: any[] = [
  //   { stateOrProvince: "MI", city: "Detroit", postalCode: "48215-2934" },
  //   ];
navbarOpen = false;
toggleNavbar() {
  this.navbarOpen = !this.navbarOpen;
}
  
  constructor(private search: SearchService, private router: Router) { }

  ngOnInit() {
  }

  searchCharities(form) {
    this.search.setOptions(form.value);

    this.router.navigate(["charity-results"]);
  }

}


