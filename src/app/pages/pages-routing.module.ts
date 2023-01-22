import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { AboutUsComponent } from './about-us/about-us.component';

export const PageRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'typography', component: TypographyComponent},
];
