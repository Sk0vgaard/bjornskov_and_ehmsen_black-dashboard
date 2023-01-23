import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { FindUsComponent } from './find-us/find-us.component';
import { PageRoutes } from './pages-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ImagesComponent } from './images/images.component';
import { FrontPageComponent } from './front-page/front-page.component'
import { TimelineComponent } from './timeline/timeline.component';
import { CustomerSatisfactionComponent } from './customer-satisfaction/customer-satisfaction.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PageRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
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
    ImagesComponent,
    FrontPageComponent,
    TimelineComponent,
    CustomerSatisfactionComponent,
    InfoComponent
  ]
})
export class PagesModule {
}
