import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StatusTagComponent } from './status-tag/status-tag.component';
import { FABComponent } from './fab/fab.component';


@NgModule({
  declarations: [
    FABComponent
  ],
  imports: [
    CommonModule,
    NavBarComponent,
    StatusTagComponent,
    FABComponent,
  ],
  providers: [
    NavBarComponent,
    StatusTagComponent,
    FABComponent,
  ]
})
export class ComponentsModule { }
