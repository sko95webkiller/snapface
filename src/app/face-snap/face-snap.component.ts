import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  //template: `<div>je suis dans le component {{title}}</div>`,
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  alphabet = ['A', 'b', 'c', 'd'];

  snapName: string = "snaps it !";
  btnColor: boolean = true;
  ndp: number = 1346789357.123457654;

  constructor(private faceSnapService: FaceSnapsService) {

  }
  ngOnInit(): void {

  }

  onSnaps(): void {
    if (this.snapName === "snaps it !") {
      //this.faceSnap.snaps = this.faceSnap.snaps + 100;
      try {
        this.faceSnapService.snapFaceSnapById(this.faceSnap.id);
      } catch(e) {
        console.log(e);
      }
      this.snapName = "unsnaps it !";
      this.btnColor = false;
    }
    else {
      //this.faceSnap.snaps = this.faceSnap.snaps--;
      //console.log(this.faceSnap.snaps);
      this.faceSnapService.unsnapFaceSnapById(this.faceSnap.id);
      this.snapName = "snaps it !";
      this.btnColor = true;
    }
  }

}