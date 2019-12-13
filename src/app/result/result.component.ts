import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service";
import { MapInfoWindow, MapMarker } from "@angular/google-maps";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnInit {
  charityResults: any[] = [];
  // test: boolean = false;

  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

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

  charity: any;

  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: "hybrid",
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8
  };

  

  ngAfterViewInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: 41.8781,
        // position.coords.latitude,
        lng: -87.623177
        // position.coords.longitude
      };
    });
  }

  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }

  markers: any[] = [];

  createMarkers() {
    if (this.charity && this.charity.data) {
      this.markers = [
        {
          position: {
            lat: this.charity.data.location.coordinates[1],
            lng: this.charity.data.location.coordinates[0]
          },
          label: {
            color: "yellow",
            text: this.charity.data.city
          },
          title: "Marker title",
          info: "Marker info " + (this.markers.length + 1),
          options: { animation: google.maps.Animation.BOUNCE }
        }
      ];
    }
  }

  openInfo(marker: MapMarker, content) {
    this.charity = content;
    this.charity.open(marker);
  }

  ngOnChanges() {
    this.createMarkers();
  }
}

