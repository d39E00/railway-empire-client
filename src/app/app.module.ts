import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {MenuComponent} from './menu/menu.component';
import {FooterComponent} from './footer/footer.component';
import {UserService} from './service/user.service';
import {AddItemComponent} from './add-item/add-item.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {EditItemComponent} from './edit-item/edit-item.component';
import {ProfileComponent} from './profile/profile.component';
import {ChartComponent} from './chart/chart.component';
import {AuditComponent} from './audit/audit.component';
import {TripComponent} from './trip/trip.component';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpClientXsrfModule} from '@angular/common/http';
import {AddTrainComponent} from './add-item/add-train/add-train.component';
import {AddScheduleComponent} from './add-item/add-schedule/add-schedule.component';
import {AddStationComponent} from './add-item/add-station/add-station.component';
import {TableTrainComponent} from './audit/table-train/table-train.component';
import {TableStationsComponent} from './audit/table-stations/table-stations.component';
import {TableAuditComponent} from './audit/table-audit/table-audit.component';
import {ScheduleByDatesComponent} from './schedule/schedule-by-dates/schedule-by-dates.component';
import {ScheduleByDatesStationsTrainComponent} from
    './schedule/schedule-by-dates-stations-train/schedule-by-dates-stations-train.component';
import {ScheduleByDatesStationsComponent} from './schedule/schedule-by-dates-stations/schedule-by-dates-stations.component';
import {ScheduleByDatesTrainComponent} from
    './schedule/schedule-by-dates-train/schedule-by-dates-train.component';
import {ScheduleService} from './service/schedule.service';
import {TrainService} from './service/train.service';
import {StationService} from './service/station.service';
import {AuditService} from './service/audit.service';
import {TableEditItemScheduleComponent} from './edit-item/table-edit-item-schedule/table-edit-item-schedule.component';
import {TableEditItemStationComponent} from './edit-item/table-edit-item-station/table-edit-item-station.component';
import {TableEditItemTrainComponent} from './edit-item/table-edit-item-train/table-edit-item-train.component';
import {AuthenticationService} from './service/authentication.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {DataTableModule} from 'angular2-datatable';
import {GoogleService} from './service/google.service';
import {ChartProfitComponent} from './chart/chart-profit/chart-profit.component';
import {ChartPeopleComponent} from './chart/chart-people/chart-people.component';
import {ChartTicketsComponent} from './chart/chart-tickets/chart-tickets.component';
import {ChartService} from './service/chart.service';
import {ChartStationsComponent} from './chart/chart-stations/chart-stations.component';
import {HomeComponent} from './home/home.component';
import {TicketService} from './service/ticket.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {TicketComponent} from './ticket/ticket.component';
import {FooterSeatsComponent} from './ticket/footer-seats/footer-seats.component';
import {ContentSeatsComponent} from './ticket/content-seats/content-seats.component';
import {TokenInterceptor} from './auth/token.interceptor';
import {ErrorComponent} from './error/error.component';
import {AngularTokenModule} from 'angular-token';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'add-item', component: AddItemComponent},
  {path: 'edit-item', component: EditItemComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'audit', component: AuditComponent},
  {path: 'trips', component: TripComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ticket/:type/:id', component: TicketComponent},
  {path: 'ticket/:type/:id_Departure/:id_Arrival', component: TicketComponent},
  {path: '', component: LoginComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [AppComponent,
    LoginComponent,
    RegistrationComponent,
    MenuComponent,
    FooterComponent,
    AddItemComponent,
    ScheduleComponent,
    EditItemComponent,
    ProfileComponent,
    ChartComponent,
    AuditComponent,
    TripComponent,
    AddScheduleComponent,
    AddStationComponent,
    AddTrainComponent,
    TableAuditComponent,
    TableStationsComponent,
    TableTrainComponent,
    ScheduleByDatesComponent,
    ScheduleByDatesStationsComponent,
    ScheduleByDatesStationsTrainComponent,
    ScheduleByDatesTrainComponent,
    TableEditItemScheduleComponent,
    TableEditItemStationComponent,
    TableEditItemTrainComponent,
    ChartProfitComponent,
    ChartPeopleComponent,
    ChartTicketsComponent,
    ChartStationsComponent,
    HomeComponent,
    TicketComponent,
    FooterSeatsComponent,
    ContentSeatsComponent,
    ErrorComponent],
  imports: [BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularTokenModule.forRoot({
      apiBase: 'http://localhost:8000',
      signInPath: 'login',
      signInRedirect: 'home'
    }),
    RouterModule.forRoot(appRoutes),
    MatTableModule,
    MatPaginatorModule,
    DataTableModule,
    NgbModule.forRoot()],
  bootstrap: [AppComponent],
  providers: [
    UserService,
    AngularTokenModule,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
    UserService,
    ScheduleService,
    TrainService,
    StationService,
    AuditService,
    AuthenticationService,
    GoogleService,
    ChartService,
    TicketService]
})
export class AppModule {
}
