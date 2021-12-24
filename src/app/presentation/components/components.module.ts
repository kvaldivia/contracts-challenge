import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StatusTagComponent } from './status-tag/status-tag.component';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    NavBarComponent,
    StatusTagComponent,
  ],
  providers: [
    NavBarComponent,
    StatusTagComponent,
  ]
})
export class ComponentsModule { }
