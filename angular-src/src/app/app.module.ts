import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router'
import { AgmCoreModule } from '@agm/core';
import { ImageUploadModule } from "angular2-image-upload";
import { BarRatingModule } from "ngx-bar-rating";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
// import { ModalModule } from 'ngx-modialog';
// import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { ModalModule } from 'ngx-modal';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';

import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service"
import { FlashMessagesModule } from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import { DataService } from "./data.service";
import { UpdateComponent } from './components/update/update.component';
import { ForgotComponent } from './components/forgot/forgot.component';
import { ResetComponent } from './components/reset/reset.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { AddtournamentComponent } from './components/addtournament/addtournament.component';
import { AddreviewComponent } from './components/addreview/addreview.component';
import { EdittournamentComponent } from './components/edittournament/edittournament.component';
import { ImageComponent } from './components/image/image.component';
import { MapComponent } from './components/map/map.component';
import { ReviewComponent } from './components/review/review.component';
import { ReportComponent } from './components/report/report.component';
import { EditreviewComponent } from './components/editreview/editreview.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { TermsandconditionsComponent } from './components/termsandconditions/termsandconditions.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'update/:id', component: UpdateComponent},
  {path:'forgot', component: ForgotComponent},
  {path:'reset/:token', component: ResetComponent},
  {path:'tournament/:id', component: TournamentComponent},
  {path:'addreview/:id', component: AddreviewComponent, canActivate:[AuthGuard]},
  {path:'addtournament', component: AddtournamentComponent, canActivate:[AuthGuard]},
  {path:'edittournament/:id', component: EdittournamentComponent, canActivate:[AuthGuard]},
  {path:'image/:id', component: ImageComponent},
  {path:'map/:id', component: MapComponent},
  {path:'review/:id', component: ReviewComponent, canActivate:[AuthGuard]},
  {path:'report/:id', component: ReportComponent, canActivate:[AuthGuard]},
  {path:'editreview/:id', component: EditreviewComponent, canActivate:[AuthGuard]},
  {path:'email-verification/:url', component: EmailVerificationComponent},
  {path:'termsandconditions', component: TermsandconditionsComponent},
  {path:'aboutus', component: AboutusComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    UpdateComponent,
    ForgotComponent,
    ResetComponent,
    TournamentComponent,
    AddtournamentComponent,
    AddreviewComponent,
    EdittournamentComponent,
    ImageComponent,
    MapComponent,
    ReviewComponent,
    ReportComponent,
    EditreviewComponent,
    EmailVerificationComponent,
    TermsandconditionsComponent,
    AboutusComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD_psTAXcXV9eR4FzF_BFe59jDFMAbVM5k'
    }),
    ImageUploadModule.forRoot(),
    BarRatingModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule,
    // ModalModule.forRoot(),
    // BootstrapModalModule,
    ModalModule
  ],
  providers: [ValidateService, AuthService, AuthGuard, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
