import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { StatusTagComponent } from './presentation/components/status-tag/status-tag.component';
import { FABComponent } from './presentation/components/fab/fab.component';
import { NavBarComponent } from './presentation/components/nav-bar/nav-bar.component';
import { ContractsPageComponent } from './presentation/pages/contracts-page/contracts-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ContractsPageComponent,
    StatusTagComponent,
    FABComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatTableModule,
    MatMenuModule,
    MatCardModule,
    NgbModule,
  ],
  providers: [ MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
