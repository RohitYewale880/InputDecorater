import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostDashboardCompComponent } from './shaired/component/post-dashboard-comp/post-dashboard-comp.component';
import { PostCompComponent } from './shaired/component/post-comp/post-comp.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MobileDashboardCompComponent } from './shaired/component/mobile-dashboard-comp/mobile-dashboard-comp.component';
import { MobileCompComponent } from './shaired/component/mobile-comp/mobile-comp.component';
import { MovieDashboardCompComponent } from './shaired/component/movie-dashboard-comp/movie-dashboard-comp.component';
import { MovieCompComponent } from './shaired/component/movie-comp/movie-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    PostDashboardCompComponent,
    PostCompComponent,
    MobileDashboardCompComponent,
    MobileCompComponent,
    MovieDashboardCompComponent,
    MovieCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
