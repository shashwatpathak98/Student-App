import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './component/homepage/homepage.component';
import { StudentDetailsUpdateComponent } from './component/student-details-update/student-details-update.component';
import { StudentDetailsViewComponent } from './component/student-details-view/student-details-view.component';
import { StudentRegisterFormComponent } from './component/student-register-form/student-register-form.component';

const routes: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'register-student',
    component: StudentRegisterFormComponent,
  },

  {
    path: 'display-student',
    component: StudentDetailsViewComponent,
  },

  { path: 'update-student', component: StudentDetailsUpdateComponent },
  {
    path: '',
    redirectTo: '/homepage',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
