import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Image } from 'src/app/models/image';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleDetailService } from 'src/app/services/vehicle-detail.service';
import { VehicleService } from 'src/app/services/vehicle.service';


@Component({
  selector: 'app-vehicle-detail',
  templateUrl: './vehicle-detail.component.html',
  styleUrls: ['./vehicle-detail.component.css']
})
export class VehicleDetailComponent implements OnInit {

  vehicles:Vehicle[]
  images:Image[];
  dataLoaded = false;
  imageUrl = "https://localhost:44308/api";

  constructor(private activatedRoute:ActivatedRoute,private vehicleDetailService:VehicleDetailService,private vehicleService:VehicleService,private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params["vehicleId"]){
        this.getVehicleDetails(params["vehicleId"])
        this.getImagesByVehicleId(params["vehicleId"])
      }
      
    })
  }

  getVehicleDetails(vehicleId:number){
    this.vehicleService.getVehicleDetailsByVehicleId(vehicleId).subscribe(response=>{
     this.vehicles=response.data
    })
     
  }
  getImagesByVehicleId(vehicleId:number){
    this.vehicleDetailService.getImagesByVehicleId(vehicleId).subscribe(response=>{
     this.images=response.data
    })
     
  }
  getSliderClassName(index:Number){
    if(index == 0){
      return "carousel-item active";
    } else {
      return "carousel-item";
    }
  }
  addToRent(vehicle:Vehicle)
  {
    if(vehicle.id===1)
    this.toastrService.success("Kiralama işlemi eklendi",vehicle.vehicleName)
  }

}