import { Routes } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { TimelineComponent } from './about-us/timeline/timeline.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CustomerSatisfactionsComponent } from './customer-satisfactions/customer-satisfactions.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ImageOverviewComponent } from './images/image-overview.component';
import { InfoComponent } from './info/info.component';
import { DashboardComponent } from './unused/dashboard/dashboard.component';
import { IconsComponent } from './unused/icons/icons.component';
import { NotificationsComponent } from './unused/notifications/notifications.component';
import { TablesComponent } from './unused/tables/tables.component';
import { TypographyComponent } from './unused/typography/typography.component';

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
