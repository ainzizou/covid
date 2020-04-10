import { Component } from '@angular/core';
import { APIService } from "../api.service";

@Component({
  selector: 'app-tab2',
  templateUrl: 'countries.page.html',
  styleUrls: ['countries.page.scss']
})
export class CountriesPage {

  responses = {};

  constructor(private api: APIService) {}

  ionViewWillEnter(){
    this.getStatistic()
  }

  async getStatistic() {
    await this.api.getStatistic().subscribe((
      x => this.responses = x
    ))
  }

}
