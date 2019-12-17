import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service";
import { MapInfoWindow, MapMarker, GoogleMap } from "@angular/google-maps";
import { title } from "process";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"]
})
export class ResultComponent implements AfterViewInit, OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow;

  infoContent = "";
  title: "";
  info = "";

  charityResults: any[] = [];
  geoAddress: any[];
  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  constructor(private search: ApiService, private router: ActivatedRoute) {}
  ngOnInit() {
    // Gets the parameters in the URL and uses them with the services method
    this.router.queryParams.subscribe(queryParams => {
      this.search.getData(queryParams).subscribe(data => {
        console.log(data);
        this.charityResults = data;
        this.getAddress();
      });
    });
  }
  getAddress() {
    for (let charity of this.charityResults) {
      let address = charity.mailingAddress;
      let addressString =
        address.streetAddress1 +
        "," +
        address.city +
        " " +
        address.stateOrProvince +
        "," +
        address.postalCode;
      this.getLatAndLng(addressString, charity);
    }
  }
  // Loop through the array for each address.
  // Loop through array and call this.get.latandlng for each item. Pass through address.

  charity: any;
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: "hybrid",
    //scrollwheel: false,
    //disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8
  };
  //map = null;
  /*map = new google.maps.Map(document.getElementById("map-component"), {
    zoom: 4
  });*/
  ngAfterViewInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });
  }
  // address: string = "28954 Farmington Rd. Farmington Hills, MI 48334";
  getLatAndLng(address, charity) {
    console.log("LATLNG");
    console.log(this);
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address }, (results: any, status) => {
      console.log(this, results);
      this.createMarker(results, charity);
    });
  }

  // this.center will change to what we're using to put markers on the map
  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }
  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }
  click(event: google.maps.MouseEvent) {
    console.log(event);
  }
  markers: any[] = [];
  createMarker(data, charity) {
    if (!this.markers) this.markers = new Array();
    let newMarker = {
      position: {
        lat: data[0].geometry.location.lat(),
        lng: data[0].geometry.location.lng()
      },
      label: {
        color: "black",
        text: charity.mailingAddress.city
      },
      title: charity.charityName,
      info:
        charity.charityName +
        ": " +
        charity.mailingAddress.streetAddress1 +
        ", " +
        charity.mailingAddress.city +
        ", " +
        charity.mailingAddress.stateOrProvince +
        ", " +
        charity.mailingAddress.postalCode +
        (this.markers.length + 1),
      options: { animation: google.maps.Animation.DROP }
    };
    if (this.markers.length == 0) {
      this.center = newMarker.position;
    }
    console.log(data, newMarker);
    this.markers.push(newMarker);
    // newMarker["map"] = this.map;
    let marker = new google.maps.Marker(newMarker);
  }
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
          options: { animation: google.maps.Animation.DROP }
        }
      ];
    }
  }
  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.infoWindow.open(marker);
  }
}
