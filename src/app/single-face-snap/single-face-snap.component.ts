import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.css']
})
export class SingleFaceSnapComponent implements OnInit {

  ID!:number;
  testParams!:{}
  @Input() monSnap!:FaceSnap;
  // monSnap!:FaceSnap;

  constructor(private route:ActivatedRoute, private service:FaceSnapsService) { }

  ngOnInit(): void {
    this.ID=+this.route.snapshot.params['id'];
    this.testParams=this.route.snapshot.params['id'];
    try{
      this.monSnap=this.service.getFaceSnapById(this.ID);
      console.log(this.monSnap);
    }catch(e){console.log(e);}
  }

}
