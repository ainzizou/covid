import { Component } from '@angular/core';
import { APIService } from "../api.service";
import { responseObject } from "../model/respon";

@Component({
  selector: 'app-tab2',
  templateUrl: 'countries.page.html',
  styleUrls: ['countries.page.scss']
})
export class CountriesPage {

  data: any[];
  toggleStatus = true;
  countries: any[] = ['India', 'Brazil'];

  constructor(private api: APIService) {
    this.getStatistic()
  }


  ionViewWillEnter() {
    this.getStatistic()
  }

  async getStatistic() {
    await this.api.getStatistic().subscribe((
      x => this.data = x['response']
    ))

    // this.countries = this.data.filter(data =>(
    //   this.countries = data.country
    // ))
  }

  toggle() {
    if (this.toggleStatus) {
      this.toggleStatus = false;

    }
  }

  toggleSection(index) {
    this.data[index].open = !this.data[index].open;

    if (this.toggleStatus && this.data[index].open) {
      this.data
        .filter((indexItem => indexItem != index))
    }
  }
}
