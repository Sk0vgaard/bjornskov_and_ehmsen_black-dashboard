import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ImagesComponent } from './images/images.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CustomerSatisfactionComponent } from './customer-satisfaction/customer-satisfaction.component';
import { InfoComponent } from './info/info.component';

export const PageRoutes: Routes = [
  { path: 'front-page', component: FrontPageComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'customer-satisfaction', component: CustomerSatisfactionComponent },
  //
  { path: 'icons', component: IconsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'typography', component: TypographyComponent },
];
