import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/customer/customer.component';
import { ImageComponent } from './components/image/image.component';
import { RentalComponent } from './components/rental/rental.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:VehicleComponent},
  {path:"vehicles",component:VehicleComponent},
  {path:"vehicles/brand/:brandId",component:VehicleComponent},
  {path:"vehicles/color/:colorId", component:VehicleComponent},
  {path:"rentals",component:RentalComponent},
  {path:"vehicles/vehicledetails/:vehicleId",component:VehicleDetailComponent},
  {path:"vehicles/images/:vehicleId",component:ImageComponent},
  {path:"customers",component:CustomerComponent},
 
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
