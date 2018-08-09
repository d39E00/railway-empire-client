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
import {MapUserComponent} from './map-user/map-user.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {EditItemComponent} from './edit-item/edit-item.component';
import {ProfileComponent} from './profile/profile.component';
import {MapItemComponent} from './map-item/map-item.component';
import {ChartComponent} from './chart/chart.component';
import {AuditComponent} from './audit/audit.component';
import {TripComponent} from './trip/trip.component';
import {HttpClientModule} from '@angular/common/http';
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

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'add-item', component: AddItemComponent},
  {path: 'edit-item', component: EditItemComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'map-user', component: MapUserComponent},
  {path: 'map-item', component: MapItemComponent},
  {path: 'chart', component: ChartComponent},
  {path: 'audit', component: AuditComponent},
  {path: 'trips', component: TripComponent},
  // {path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [AppComponent,
    LoginComponent,
    RegistrationComponent,
    MenuComponent,
    FooterComponent,
    AddItemComponent,
    MapUserComponent,
    ScheduleComponent,
    EditItemComponent,
    ProfileComponent,
    MapItemComponent,
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
    TableEditItemTrainComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot(appRoutes),
    MatTableModule,
    MatPaginatorModule,
    DataTableModule],
  bootstrap: [AppComponent],
  providers: [UserService,
    ScheduleService,
    TrainService,
    StationService,
    AuditService,
    AuthenticationService,
    GoogleService]
})
export class AppModule {
}
