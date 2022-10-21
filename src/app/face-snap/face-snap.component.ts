import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  //template: `<div>je suis dans le component {{title}}</div>`,
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  
  @Input() faceSnap!: FaceSnap;

  snapName: string = "snaps it !";
  btnColor: boolean = true;

  ngOnInit(): void {
    
  }

  onSnaps(): void {
    if (this.snapName === "snaps it !") {
      this.faceSnap.snaps++;
      console.log(this.faceSnap.snaps);
      this.snapName = "unsnaps it !";
      this.btnColor = false;
    }
    else {
      this.faceSnap.snaps--;
      console.log(this.faceSnap.snaps);
      this.snapName = "snaps it !";
      this.btnColor = true;
    }
  }

}