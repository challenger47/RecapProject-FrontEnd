import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from 'src/app/models/image';
import { Vehicle } from 'src/app/models/vehicle';
import { ImageService } from 'src/app/services/image.service';
import { VehicleDetailService } from 'src/app/services/vehicle-detail.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  vehicles:Vehicle[];
  images:Image[];

  constructor(private activatedRoute:ActivatedRoute,private vehicleDetailService:VehicleDetailService,private imageService:ImageService) { }

  ngOnInit(): void {

    this.getImagesByVehicleId(this.activatedRoute.snapshot.params["vehicleId"]);
  }

  getImagesByVehicleId(vehicleId:number){
    this.imageService.getImagesByVehicleId(vehicleId).subscribe(response=>{
     this.images=response.data
    })
     
  }


}
