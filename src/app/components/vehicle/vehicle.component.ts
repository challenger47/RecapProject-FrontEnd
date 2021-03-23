import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';
@Component({
  selector: 'app-vehicle',
  templateUrl:'./vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit 
{

  
  vehicles: Vehicle[] = [];
  
  dataLoaded = false;
  filterText="";
  constructor(
    private vehicleService: VehicleService,
    private activatedRoute:ActivatedRoute,private toastrService:ToastrService) {}
    imageUrl = "https://localhost:44308/api";
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getVehicleDetailsByBrand(params["brandId"])
      }else if(params["colorId"]){
        this.getVehicleDetailsByColor(params["colorId"])
      }else{
        this.getAllVehicleDetails();
      }
    })
  }


  getAllVehicleDetails() {
    this.vehicleService.getAllVehicleDetails().subscribe((response) => {
      this.vehicles = response.data;
      this.dataLoaded = true;
     
    });
  }

  getVehicleDetailsByBrand(brandId:number){
    this.vehicleService.getVehicleDetailsByBrand(brandId).subscribe((response) => {
      this.vehicles = response.data;
      this.dataLoaded = true;
      
    });
  }

  getVehicleDetailsByColor(colorId:number){
    this.vehicleService.getVehicleDetailsByColor(colorId).subscribe((response) => {
      this.vehicles = response.data;
      this.dataLoaded = true;
      
      
    });
  }
  addToRent(vehicle:Vehicle)
  {
    if(vehicle.id===1)
    this.toastrService.success("Kiralama işlemi eklendi",vehicle.vehicleName)
  }
}