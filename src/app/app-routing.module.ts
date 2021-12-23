import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractsPageComponent } from './contracts-page/contracts-page.component';

const routes: Routes = [
  {
    path: 'contracts',
    component: ContractsPageComponent,
  },
  {
    path: '**',
    redirectTo: 'contracts',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
