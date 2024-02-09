import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { UpdatePersonComponent } from './components/update-person/update-person.component';
import { ViewPersonsComponent } from './components/view-persons/view-persons.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailsPersonsComponent } from './components/details-persons/details-persons.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPersonComponent,
    UpdatePersonComponent,
    ViewPersonsComponent,
    DetailsPersonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
