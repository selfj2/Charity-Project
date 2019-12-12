import { Component, AfterViewInit, Input } from "@angular/core";
import { ApiService } from "../api.service";
import { MapInfoWindow, MapMarker } from "@angular/google-maps";
import { ActivatedRoute } from "@angular/router";

declare global {
  interface Window {
    google: any;
  }
}

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements AfterViewInit {
  @Input() charity: any;

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

  constructor(private search: ApiService, private router: ActivatedRoute) {}

  ngAfterViewInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
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
