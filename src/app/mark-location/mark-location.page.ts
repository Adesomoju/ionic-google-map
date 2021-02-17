import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-mark-location',
  templateUrl: './mark-location.page.html',
  styleUrls: ['./mark-location.page.scss'],
})

export class MarkLocationPage implements OnInit, AfterViewInit {
  latitude: any;
  longitude: any;
  @ViewChild('mapElement') mapNativeElement: ElementRef;
  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      const map = new google.maps.Map(this.mapNativeElement.nativeElement, {
        center: {lat: -34.397, lng: 150.644},
        zoom: 16
      });
      /*location object*/
      const pos = {
        lat: this.latitude,
        lng: this.longitude
      };
      map.setCenter(pos);
      const icon = {
        url: 'assets/icon/delivery.png', // image url
        scaledSize: new google.maps.Size(50, 50), // scaled size
      };
      const marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Hello World!',
        icon: icon
      });
      const contentString = '<div id="content">' +
          '<p><b>TruQ Driver</b></p> ' +
          '</div>';
      const infowindow = new google.maps.InfoWindow({
        content: contentString,
        maxWidth: 400
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
