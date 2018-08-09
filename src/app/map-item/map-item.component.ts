import {Component, OnInit, ViewChild} from '@angular/core';
import {} from '@types/googlemaps';
import swal from 'sweetalert2';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-map-item',
  templateUrl: './map-item.component.html',
  styleUrls: ['./map-item.component.css']
})
export class MapItemComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  markers = [];
  users: any = [];

  constructor(private userService: UserService) {
  }

  swalWithBootstrapButtons = swal.mixin({
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger',
    buttonsStyling: false,
  });

  ngOnInit() {
    this.update();
    this.map = new google.maps.Map(this.gmapElement.nativeElement, {
      zoom: 3,
      center: {lat: 60, lng: 80},
      styles: [{
        'featureType': 'all',
        'elementType': 'labels.text.fill',
        'stylers': [{'saturation': 36}, {'color': '#000000'}, {'lightness': 40}]
      }, {
        'featureType': 'all',
        'elementType': 'labels.text.stroke',
        'stylers': [{'visibility': 'on'}, {'color': '#000000'}, {'lightness': 16}]
      }, {
        'featureType': 'all',
        'elementType': 'labels.icon',
        'stylers': [{'visibility': 'off'}]
      }, {
        'featureType': 'administrative',
        'elementType': 'geometry.fill',
        'stylers': [{'color': '#000000'}, {'lightness': 20}]
      }, {
        'featureType': 'administrative',
        'elementType': 'geometry.stroke',
        'stylers': [{'color': '#000000'}, {'lightness': 17}, {'weight': 1.2}]
      }, {
        'featureType': 'landscape',
        'elementType': 'geometry',
        'stylers': [{'color': '#000000'}, {'lightness': 20}]
      }, {
        'featureType': 'poi',
        'elementType': 'geometry',
        'stylers': [{'color': '#000000'}, {'lightness': 21}]
      }, {
        'featureType': 'road.highway',
        'elementType': 'geometry.fill',
        'stylers': [{'color': '#000000'}, {'lightness': 17}]
      }, {
        'featureType': 'road.highway',
        'elementType': 'geometry.stroke',
        'stylers': [{'color': '#000000'}, {'lightness': 29}, {'weight': 0.2}]
      }, {
        'featureType': 'road.arterial',
        'elementType': 'geometry',
        'stylers': [{'color': '#000000'}, {'lightness': 18}]
      }, {
        'featureType': 'road.local',
        'elementType': 'geometry',
        'stylers': [{'color': '#000000'}, {'lightness': 16}]
      }, {
        'featureType': 'transit',
        'elementType': 'geometry',
        'stylers': [{'color': '#000000'}, {'lightness': 19}]
      }, {'featureType': 'water', 'elementType': 'geometry', 'stylers': [{'color': '#000000'}, {'lightness': 17}]}]
    });
  }

  addMarkerWithTimeoutForStation(position, timeout) {
    window.setTimeout(function () {
      const marker = new google.maps.Marker({
        position: {lat: position.scheduleStationArrivalLatitude, lng: position.scheduleStationArrivalLongitude},
        map: this.map,
        title: position.scheduleStationArrivalName,
        animation: google.maps.Animation.DROP,
      });

      marker.addListener('click', function () {
        this.swalWithBootstrapButtons({
          title: position.scheduleStationArrivalName,
          text: 'last visit was on ' + position.scheduleDateArrival,
          type: 'info',
          showCloseButton: true,
          confirmButtonText: 'I want to leave feedback',
          reverseButtons: true
        });
      });
      this.markers.push(marker);
    });
  }


  clearMarkers() {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }

  update() {
    this.userService.getForMap().subscribe(res => {
      this.clearMarkers();
      this.users = res;
      for (let i = 0; i < this.users.length; i++) {
        this.addMarkerWithTimeoutForStation(this.users[i], i * 200);
      }
    });
  }
}
