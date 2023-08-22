import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './components/shared/base/base.component';
import { StudyDetailsComponent } from './components/shared/study-details/study-details.component';
const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
  },
  {
    path: 'study-details',
    component: StudyDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
