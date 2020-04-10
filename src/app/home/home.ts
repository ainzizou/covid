import { Component } from '@angular/core';
import { APIService } from "../api.service";

@Component({
  selector: 'home',
  templateUrl: 'home.html',
  styleUrls: ['home.scss']
})
export class HomePage {

  responses = {};

  constructor(private api: APIService) {
  }

  

  ionViewWillEnter(){
  this.getSummary()
  }

  async getSummary() {
    await this.api.getSummary().subscribe((
      x => this.responses = x))
  }
}
