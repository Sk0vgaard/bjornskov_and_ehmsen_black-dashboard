import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CollapsedComponent } from './_shared/collapsed/collapsed.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TimelineComponent } from './about-us/timeline/timeline.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FindUsComponent } from './contact-us/find-us/find-us.component';
import { CustomerSatisfactionComponent } from './customer-satisfactions/customer-satisfaction/customer-satisfaction.component';
import { CustomerSatisfactionsComponent } from './customer-satisfactions/customer-satisfactions.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { PrimaryWorkingAreaComponent } from './front-page/primary-working-area/primary-working-area.component';
import { ValuesComponent } from './front-page/values/values.component';
import { InfoComponent } from './info/info.component';
import { PageRoutes } from './pages-routing.module';
import { ServicesComponent } from './services/services.component';
import { DashboardComponent } from './unused/dashboard/dashboard.component';
import { IconsComponent } from './unused/icons/icons.component';
import { NotificationsComponent } from './unused/notifications/notifications.component';
import { TablesComponent } from './unused/tables/tables.component';
import { TypographyComponent } from './unused/typography/typography.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PageRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FontAwesomeModule,
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
    CustomerSatisfactionsComponent,
    CustomerSatisfactionComponent,
    InfoComponent,
    ValuesComponent,
    CollapsedComponent,
    PrimaryWorkingAreaComponent,
    ServicesComponent,
  ],
})
export class PagesModule {}
