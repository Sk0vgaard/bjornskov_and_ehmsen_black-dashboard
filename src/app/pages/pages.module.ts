import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwiperModule } from 'swiper/angular';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FindUsComponent } from './contact-us/find-us/find-us.component';
import { CustomerSatisfactionComponent } from './customer-satisfaction/customer-satisfaction.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { IconsComponent } from './icons/icons.component';
import { ImageOverviewComponent } from './images/image-overview.component';
import { InfoComponent } from './info/info.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PageRoutes } from './pages-routing.module';
import { TablesComponent } from './tables/tables.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TypographyComponent } from './typography/typography.component';
import { ImageDetailsComponent } from './images/image-details/image-details.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PageRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    SwiperModule,
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
    ImageOverviewComponent,
    FrontPageComponent,
    TimelineComponent,
    CustomerSatisfactionComponent,
    InfoComponent,
    ImageDetailsComponent,
  ],
})
export class PagesModule {}
