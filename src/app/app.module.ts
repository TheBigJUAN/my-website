import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import {MatMenuModule} from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import { AlertModule, CarouselModule } from '@coreui/angular';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    RouterModule,
    MatButtonModule,
    NgbModule,
    MatMenuModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AlertModule,
    CarouselModule, 
    RouterModule.forRoot([]),
    RouterModule.forChild([]),
    MatCardModule,
    MatDividerModule,
    
    
  ],
  providers: [],
  exports: [AppComponent]
  ,
  bootstrap: [AppComponent]
})
export class AppModule { }