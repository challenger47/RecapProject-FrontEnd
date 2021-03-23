import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from 'rxjs';
import { Image } from '../models/image';

@Injectable({
  providedIn: 'root'
})
export class VehicleDetailService {

  constructor(private httpClient:HttpClient) { }
  apiUrl='https://localhost:44308/api'
  getImages():Observable<ListResponseModel<Image>>{
    let newPath=this.apiUrl+"images/getall"
    return this.httpClient.get<ListResponseModel<Image>>(newPath)
  }

  getImagesByVehicleId(vehicleId:number):Observable<ListResponseModel<Image>>{
    let newPath=this.apiUrl+"images/getimagesbyvehicleid?vehicleId="+vehicleId
    return this.httpClient.get<ListResponseModel<Image>>(newPath)
  }
}