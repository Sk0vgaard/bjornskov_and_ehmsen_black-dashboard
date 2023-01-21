import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';
import { MapComponent } from './map/map.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';

export const PageRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'icons', component: IconsComponent},
  {path: 'maps', component: MapComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'user', component: UserComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'typography', component: TypographyComponent},
];
