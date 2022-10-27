import { Component, OnInit } from '@angular/core';
import {FaceSnap} from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.css']
})
export class FaceSnapListComponent implements OnInit {
  
  mySnap!:FaceSnap[];

  constructor() { }

  ngOnInit(): void {

    this.mySnap = [
      {
        title: 'Mokhtarus',
        description: 'Mon ami de toujours et à  jamais',
        createdDate: new Date(),
        snaps: 255,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        location: 'Paris'
      },
      {
        title: 'ben mon ami',
        description: 'chien de la casse',
        createdDate: new Date(),
        snaps: 150,
        imageUrl: 'https://picsum.photos/200/300',
      },
      {
        title: 'Aktarus',
        description: 'Mon ami de toujours',
        createdDate: new Date(),
        snaps: 50,
        imageUrl: 'https://picsum.photos/id/200/300',
        location: 'New York'
      },
      {
        title: 'le ciel ',
        description: 'Comme vous ne l\'avez jamais vu !',
        createdDate: new Date(),
        snaps: 15,
        imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
        location: 'A DAKAR !'
      }
    ]

  }

}
