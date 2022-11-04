import { Component, OnInit,OnChanges,AfterContentInit,AfterContentChecked,AfterViewInit,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-bidon',
  templateUrl: './bidon.component.html',
  styleUrls: ['./bidon.component.css']
})
export class BidonComponent implements
 OnInit,OnChanges,AfterContentInit,
 AfterContentChecked,AfterViewInit,OnDestroy{

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit() launched!");
  }
  ngOnChanges(): void {
    console.log("ngOnChanges() launched!");
  }
  
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit() launched!");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked() launched!");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit() launched!");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked() launched!");
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy() launched!");
  }

}
