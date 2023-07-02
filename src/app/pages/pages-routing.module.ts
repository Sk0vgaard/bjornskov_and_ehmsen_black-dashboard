import { Routes } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerSatisfactionsComponent } from './customer-satisfactions/customer-satisfactions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { IconsComponent } from './icons/icons.component';
import { ImageOverviewComponent } from './images/image-overview.component';
import { InfoComponent } from './info/info.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TablesComponent } from './tables/tables.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TypographyComponent } from './typography/typography.component';

export const PageRoutes: Routes = [
  { path: 'front-page', component: FrontPageComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'info', component: InfoComponent },
  { path: 'timeline', component: TimelineComponent },
  { path: 'images', component: ImageOverviewComponent },
  { path: 'customer-satisfaction', component: CustomerSatisfactionsComponent },
  //
  { path: 'icons', component: IconsComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'typography', component: TypographyComponent },
];
