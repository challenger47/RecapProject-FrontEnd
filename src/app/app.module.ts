import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { UserComponent } from './components/user/user.component';
import { NaviComponent } from './components/navi/navi.component';
import { ImageComponent } from './components/image/image.component';
import { VehicleDetailComponent } from './components/vehicle-detail/vehicle-detail.component';
import { VatAddedPipe } from './pipes/vat-added.pipe';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { FilterPipePipe } from './pipes/filter-pipe.pipe';

import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    BrandComponent,
    ColorComponent,
    RentalComponent,
    CustomerComponent,
    UserComponent,
    NaviComponent,
    ImageComponent,
    VehicleDetailComponent,
    VatAddedPipe,
    FilterPipePipe,
    
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"

    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
