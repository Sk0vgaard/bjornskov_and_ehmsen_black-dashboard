import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FindUsComponent } from './contact-us/find-us/find-us.component';
import { CustomerSatisfactionComponent } from './customer-satisfaction/customer-satisfaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { ValuesComponent } from './front-page/values/values.component';
import { IconsComponent } from './icons/icons.component';
import { InfoComponent } from './info/info.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PageRoutes } from './pages-routing.module';
import { TablesComponent } from './tables/tables.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TypographyComponent } from './typography/typography.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PageRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  declarations: [
    DashboardComponent,
    ContactUsComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    FindUsComponent,
    AboutUsComponent,
    FrontPageComponent,
    TimelineComponent,
    CustomerSatisfactionComponent,
    InfoComponent,
    ValuesComponent,
  ],
})
export class PagesModule {}
