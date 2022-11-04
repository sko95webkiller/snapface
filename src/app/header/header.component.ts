import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  monSnap!: FaceSnap;
  constructor(private route: Router, private service: FaceSnapsService) { }

  id: number = 1;
  
  ngOnInit(): void {
  }
  displayOne(): void {
    this.monSnap = this.service.getFaceSnapById(this.id);
    this.route.navigateByUrl(`facesnaps/${this.id}`);
    console.table(this.monSnap);
  }

  
}
