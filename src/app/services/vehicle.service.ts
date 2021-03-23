import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
 
  apiUrl="https://localhost:44308/api/"

  constructor(private httpClient:HttpClient) { }
  getAllVehicleDetails():Observable<ListResponseModel<Vehicle>> {
    let newPath = this.apiUrl + "vehicles/getdetails"
    return this.httpClient
      .get<ListResponseModel<Vehicle>>(newPath);
  }

  getVehicleDetailsByBrand(brandId:number){
    let newPath = this.apiUrl + "vehicles/getvehicledetailsbybrandid?brandId=" + brandId;
    return this.httpClient
      .get<ListResponseModel<Vehicle>>(newPath);
      
  }

  getVehicleDetailsByColor(colorId:number){
    let newPath = this.apiUrl + "vehicles/getvehicledetailsbycolorid?colorId=" + colorId;
    return this.httpClient
      .get<ListResponseModel<Vehicle>>(newPath);
  }

 

  getVehicleDetailsByVehicleId(vehicleId:number){
    let newPath = this.apiUrl + "vehicles/getvehicledetailsbyvehicleid?vehicleid=" + vehicleId;
    return this.httpClient
      .get<ListResponseModel<Vehicle>>(newPath);
  }
}

