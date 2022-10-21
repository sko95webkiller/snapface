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
    // this.mySnap = new FaceSnap(
    //   'Mokhtarus',
    //   'Mon ami de toujours',
    //   new Date(),
    //   600,
    //   'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    // );

    // this.my2Snap = new FaceSnap(
    //   'ben le mouton',
    //   'Mon ami de toujours',
    //   new Date(),
    //   999,
    //   'https://picsum.photos/200/300'
    // );

    // this.my3Snap = new FaceSnap(
    //   'Actarus',
    //   'Mon ami de toujours',
    //   new Date(),
    //   1006,
    //   'https://picsum.photos/id/1/200/300'
    // );


    this.mySnap = {
      title: 'Mokhtarus',
      description: 'Mon ami de toujours',
      createdDate: new Date(),
      snaps: 600,
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      location: 'Paris'
    }
    this.my2Snap = {
      title: 'ben mon ami',
      description: 'chien de la casse',
      createdDate: new Date(),
      snaps: 1200,
      imageUrl: 'https://picsum.photos/200/300',
    }
    this.my3Snap = {
      title: 'Aktarus',
      description: 'Mon ami de toujours',
      createdDate: new Date(),
      snaps: 999,
      imageUrl: 'https://picsum.photos/id/200/300',
      location: 'New York'
    }

  }

}
