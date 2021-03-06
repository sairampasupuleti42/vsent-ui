import { Component, OnInit } from '@angular/core';
import { Observable, fromEvent, Observer, of } from 'rxjs';

@Component({
  selector: 'vs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  presence: any;
  constructor() { }

  ngOnInit() {
    setInterval(this.checkInternetConnection, 20000);
  }
  public checkInternetConnection() {
    this.presence = window.navigator.onLine ? 'Online' : 'Offline! Check your internet ';
  }
}
