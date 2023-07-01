import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  {
    path: '/front-page',
    title: 'Forside',
    icon: 'icon-heart-2',
    class: '',
  },
  {
    path: '/contact-us',
    title: 'Kontakt os',
    icon: 'icon-email-85',
    class: '',
  },
  {
    path: '/about-us',
    title: 'Hvem er vi',
    icon: 'icon-single-02',
    class: '',
  },
  {
    path: '/info',
    title: 'FAQ',
    icon: 'icon-alert-circle-exc',
    class: '',
  },
  // TODO: Add when timeline has been provided from the firm
  // {
  //   path: '/timeline',
  //   title: 'Tidslinje',
  //   icon: 'icon-spaceship',
  //   class: '',
  // },
  // TODO: Add when images has been provided
  // {
  //   path: '/images',
  //   title: 'Billeder',
  //   icon: 'icon-image-02',
  //   class: '',
  // },
  {
    path: '/customer-satisfaction',
    title: 'Kundetilfredhed',
    icon: 'icon-satisfied',
    class: '',
  },
  // {
  //   path: '/',
  //   title: '-------------------',
  //   icon: '',
  //   class: '',
  // },
  // {
  //   path: '/dashboard',
  //   title: 'Dashboard',
  //   icon: 'icon-chart-pie-36',
  //   class: '',
  // },
  // {
  //   path: '/icons',
  //   title: 'Icons',
  //   icon: 'icon-atom',
  //   class: '',
  // },
  // {
  //   path: '/notifications',
  //   title: 'Notifications',
  //   icon: 'icon-bell-55',
  //   class: '',
  // },
  // {
  //   path: '/tables',
  //   title: 'Table List',
  //   icon: 'icon-puzzle-10',
  //   class: '',
  // },
  // {
  //   path: '/typography',
  //   title: 'Typography',
  //   icon: 'icon-align-center',
  //   class: '',
  // },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  public ngOnInit(): void {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }

  public isMobileMenu(): boolean {
    return window.innerWidth <= 991;
  }
}
