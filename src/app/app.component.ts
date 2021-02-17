import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    {
      title: 'Map',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Location',
      url: '/geolocation',
      icon: 'locate'
    },
    {
      title: "Driver's location",
      url: '/mark-location',
      icon: 'navigate'
    }, {
      title: 'Route',
      url: '/direction',
      icon: 'compass'
    }, {
      title: 'Search',
      url: '/auto-complete',
      icon: 'search'
    },  {
      title: 'Get Direction',
      url: '/geo-direction',
      icon: 'locate'
    } , {
      title: 'locate',
      url: 'get-direction',
      icon: 'locate'
    }
  ];
  constructor() {}
}
