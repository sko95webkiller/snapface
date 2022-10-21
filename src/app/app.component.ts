import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  my2Snap!: FaceSnap;
  my3Snap!: FaceSnap;
  
  ngOnInit() {
    this.mySnap = new FaceSnap(
      'Mokhtarus',
      'Mon ami de toujours',
      new Date(),
      6,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    );

    this.my2Snap = new FaceSnap(
      'ben le mouton',
      'Mon ami de toujours',
      new Date(),
      6,
      'https://picsum.photos/200/300'
    );

    this.my3Snap = new FaceSnap(
      'Actarus',
      'Mon ami de toujours',
      new Date(),
      6,
      'https://picsum.photos/id/1/200/300'
    );
  }

}
