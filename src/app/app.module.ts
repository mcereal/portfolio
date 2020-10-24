import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, PortfolioComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
