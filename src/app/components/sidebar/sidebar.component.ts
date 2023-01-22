import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Forside',
    icon: 'icon-chart-pie-36',
    class: ''
  },
  {
    path: '/contact-us',
    title: 'Kontakt os',
    icon: 'icon-email-85',
    class: ''
  },
  {
    path: '/about-us',
    title: 'Hvem er vi',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/timeline',
    title: 'Tidslinje',
    icon: 'icon-spaceship',
    class: ''
  },
  {
    path: '/maps',
    title: 'Find os',
    icon: 'icon-square-pin',
    class: ''
  },
  {
    path: '/images',
    title: 'Billeder',
    icon: 'icon-image-02',
    class: ''
  },
  {
    path: '/satisfaction',
    title: 'Kunde tilfredhed',
    icon: 'icon-satisfied',
    class: ''
  },
  {
    path: '/',
    title: '-------------------',
    icon: '',
    class: ''
  },
  {
    path: '/icons',
    title: 'Icons',
    icon: 'icon-atom',
    class: ''
  },
  {
    path: '/notifications',
    title: 'Notifications',
    icon: 'icon-bell-55',
    class: ''
  },
  {
    path: '/tables',
    title: 'Table List',
    icon: 'icon-puzzle-10',
    class: ''
  },
  {
    path: '/typography',
    title: 'Typography',
    icon: 'icon-align-center',
    class: ''
  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {
  }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
