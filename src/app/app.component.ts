import { Component, OnInit } from '@angular/core';
//import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //mySnap!: FaceSnap[];
  //my2Snap!: FaceSnap;
  //my3Snap!: FaceSnap;

  ngOnInit() {
    //VERSION AVEC CONSTRUCTEUR
    // this.mySnap = new FaceSnap(
    //   'Mokhtarus',
    //   'Mon ami de toujours',
    //   new Date(),
    //   600,
    //   'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    // );

    //VERSION AVEC OBJET ISOLE
    // this.mySnap = {
    //   title: 'Mokhtarus',
    //   description: 'Mon ami de toujours',
    //   createdDate: new Date(),
    //   snaps: 600,
    //   imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    //   location: 'Paris'
    // }
   
    //VERSION AVEC UN TABLEAU D OBJET
    // this.mySnap = [
    //   {
    //     title: 'Mokhtarus',
    //     description: 'Mon ami de toujours et à  jamais',
    //     createdDate: new Date(),
    //     snaps: 255,
    //     imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
    //     location: 'Paris'
    //   },
    //   {
    //     title: 'ben mon ami',
    //     description: 'chien de la casse',
    //     createdDate: new Date(),
    //     snaps: 150,
    //     imageUrl: 'https://picsum.photos/200/300',
    //   },
    //   {
    //     title: 'Aktarus',
    //     description: 'Mon ami de toujours',
    //     createdDate: new Date(),
    //     snaps: 50,
    //     imageUrl: 'https://picsum.photos/id/200/300',
    //     location: 'New York'
    //   },
    //   {
    //     title: 'le ciel ',
    //     description: 'Comme vous ne l\'avez jamais vu !',
    //     createdDate: new Date(),
    //     snaps: 15,
    //     imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
    //     location: 'A DAKAR !'
    //   }
      

    // ]


  }

}
