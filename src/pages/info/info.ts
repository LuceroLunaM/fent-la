import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
export class InfoPage {
  item: any;

  constructor(public navParams: NavParams) {
    this.item = this.navParams.data.item;
  }

}
