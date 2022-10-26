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
  alphabet= ['A', 'b', 'c', 'd'];

  snapName: string = "snaps it !";
  btnColor: boolean = true;
  ndp:number=1346789357.123457654;

  ngOnInit(): void {

  }

  onSnaps(): void {
    if (this.snapName === "snaps it !") {
      this.faceSnap.snaps=this.faceSnap.snaps+100;
      console.log(this.faceSnap.snaps);
      this.snapName = "unsnaps it !";
      this.btnColor = false;
    }
    else {
      this.faceSnap.snaps=this.faceSnap.snaps-100;
      console.log(this.faceSnap.snaps);
      this.snapName = "snaps it !";
      this.btnColor = true;
    }
  }

}