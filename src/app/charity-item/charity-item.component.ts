import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charity-item',
  templateUrl: './charity-item.component.html',
  styleUrls: ['./charity-item.component.css']
})
export class CharityItemComponent implements OnInit {

  // @Input() charity: any;

  // constructor(private router: Router) { }

  // goToCharityInfo() {
  //   this.router.navigate(["charity", this.charity.label]);
  // }
  
  ngOnInit() {
  }

}
