import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LocationsComponent } from './locations.component';


import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forChild([{ path: '', component: LocationsComponent }]),
    SharedModule
  ]
})
export class LocationsModule {}
