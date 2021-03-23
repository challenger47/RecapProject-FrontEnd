import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Image } from '../models/image';
import { ListResponseModel } from '../models/listResponseModel';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  apiUrl = 'https://localhost:44308/api/';

  constructor(private httpClient:HttpClient) { }

  getVehicleImages():Observable<ListResponseModel<Image>>
    {
    let newPath =this.apiUrl+"images/getall"
    return this.httpClient.get<ListResponseModel<Image>>(newPath)
    }
    getImagesByVehicleId(vehicleId:number):Observable<ListResponseModel<Image>>{
      let newPath = this.apiUrl + "images/getimagesbyvehicleid?vehicleId=" + vehicleId;
      return this.httpClient.get<ListResponseModel<Image>>(newPath);
    }
  

}