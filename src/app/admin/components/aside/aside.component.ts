import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vs-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  @Input()
  menus = [];
  constructor() { }

  ngOnInit() {
  }

}
