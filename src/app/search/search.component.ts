import { Component, OnInit } from "@angular/core";
import { SearchService } from "../search.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  states: string[] = [
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FM",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY"
  ];

  quotes: string[] = [
    '"We make a living by what we get, but we make a life by what we give." -Winston Churchill',
    '"You have not lived today until you have done something for someone who can never repay you." -John Bunyan',
    '"The secret to living is giving. No matter how busy or broke you may be, you have something to offer others." -Tony Robbins',
    '"Happy people plan actions, they don’t plan results." — Dennis Waitley',
    '"Write it on your heart that every day is the best day in the year." -Ralph Waldo Emerson',
    '"Caring about others, running the risk of feeling, and leaving an impact on people, brings happiness." -Harold Kushner',
    '"When peoples care for you and cry for you, they can straighten out your soul." -Langston Hughes',
    '"The closest thing to being cared for is to care for someone else." -Carson McCullers',
    '"Indifference and neglect often do much more damage than outright dislike." -J. K. Rowling',
    '"Never believe that a few caring people can’t change the world. For, indeed, that’s all who ever have." -Margaret Mead',
    '"Want of care does us more damage than want of knowledge." -Benjamin Franklin'
  ];

  randomQuote: any = `${
    this.quotes[Math.floor(Math.random() * this.quotes.length)]
  }`;

  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  constructor(private search: SearchService, private router: Router) {}

  ngOnInit() {}

  searchCharities(form: any) {
    // navigates to the results component with set parameters in the URL
    this.router.navigate(["/result"], {
      queryParams: {
        search: form.value.search,
        state: form.value.state,
        city: form.value.city
      }
    });
  }
}
