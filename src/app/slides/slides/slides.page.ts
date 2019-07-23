
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
})
export class SlidesPage implements OnInit {
  slideOpts = {
    effect: 'flip',
  };

  constructor(private route:Router,private menuCtrl:MenuController) {
   this.menuCtrl.enable(false);
   }

  ngOnInit() {
  }

  sliderChanges(event){
    console.log('sliderChanges',event);
  }
    
  skip(){
    console.log('skip slides');
    this.route.navigate(['location']);
  }

  locationPage(){
    console.log('location page');
    this.route.navigate(['location']);
  }


}
