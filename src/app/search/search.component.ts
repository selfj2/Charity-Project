import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
