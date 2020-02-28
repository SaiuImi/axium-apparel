import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})
export class SiteHeaderComponent implements OnInit {

  menu: Array<object>;

  constructor() { }

  ngOnInit() {
    // Setting up mocked data
    this.menu = [
      {name: 'Camping', subMenu: []},
      {name: 'Clothing', subMenu: [
        'Outerwear', 'Hiking Shoes / Boots', 'Gloves', 'Hats'
      ]},
      {name: 'Fishing', subMenu: []},
      {name: 'Hiking', subMenu: []},
      {name: 'Biking', subMenu: []},
    ];
  }

}
