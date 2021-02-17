import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, AfterViewInit{

  @ViewChild('mapElement', {read: ElementRef}) mapElement: ElementRef;
  map:any;
  
  constructor(private geolocation: Geolocation) {}

  ngOnInit(){}

  ngAfterViewInit() : void {
    this.map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
        center: {lat: 9.0820, lng: 8.6753},
        zoom: 8
      }
    );
  }


}
