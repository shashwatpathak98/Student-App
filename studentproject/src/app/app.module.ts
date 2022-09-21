import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { StudentRegisterFormComponent } from './component/student-register-form/student-register-form.component';
import { StudentDetailsViewComponent } from './component/student-details-view/student-details-view.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailsUpdateComponent } from './component/student-details-update/student-details-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    StudentRegisterFormComponent,
    StudentDetailsViewComponent,
    StudentDetailsUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
