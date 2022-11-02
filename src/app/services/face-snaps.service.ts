import { Injectable } from "@angular/core";
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {

    getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapById(id: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(fs => fs.id === id);
        if (faceSnap) {
            return faceSnap;
        } else {
            throw new Error('FaceSnap ID NOT FOUND !');
        }
    }
    snapFaceSnapById(id: number, snapType: 'snap it !' | 'unsnap it !'): void {
        try {
            const faceSnap = this.getFaceSnapById(id);
            snapType === 'snap it !' ? faceSnap.snaps++ : faceSnap.snaps--;
        } catch (e) { console.log(e); }
    }

    // snapFaceSnapById(id: number): void {
    //     const faceSnap = this.faceSnaps.find(fs => fs.id === id);
    //     if (faceSnap) {
    //         faceSnap.snaps++;
    //         console.log('faceSnap.snaps=', faceSnap.snaps);
    //     } else {
    //         throw new Error('FaceSnap ID NOT FOUND !');
    //     }
    // }

    // unsnapFaceSnapById(id: number): void {
    //     const faceSnap = this.faceSnaps.find(fs => fs.id === id);
    //     if (faceSnap) {
    //         faceSnap.snaps--;
    //         console.log('faceSnap.snaps=', faceSnap.snaps);
    //     } else {
    //         throw new Error('FaceSnap ID NOT FOUND !');
    //     }
    // }

    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Mokhtarus',
            description: 'Mon ami de toujours et à  jamais',
            createdDate: new Date(),
            snaps: 255,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
            location: 'Paris'
        },
        {
            id: 2,
            title: 'ben mon ami',
            description: 'chien de la casse',
            createdDate: new Date(),
            snaps: 150,
            imageUrl: 'https://picsum.photos/200/300',
        },
        {
            id: 3,
            title: 'Aktarus',
            description: 'Mon ami de toujours',
            createdDate: new Date(),
            snaps: 50,
            imageUrl: 'https://picsum.photos/id/200/300',
            location: 'New York'
        },
        {
            id: 4,
            title: 'le ciel ',
            description: 'Comme vous ne l\'avez jamais vu !',
            createdDate: new Date(),
            snaps: 15,
            imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg',
            location: 'A DAKAR !'
        },
        
    ]

}