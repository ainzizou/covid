import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class APIService {

  headers:HttpHeaders;

  constructor(private http: HttpClient) {
     // Go and register to get  'x-rapidapi-key' at https://rapidapi.com/astsiatsko/api/coronavirus-monitor
    this.headers = new HttpHeaders({
      'x-rapidapi-key': 'RAPID_KEY_API_HERE'
    })
  }

  getStatistic() {
    const APIhost = 'covid-193.p.rapidapi.com';
    const URL = 'https://covid-193.p.rapidapi.com/statistics';
    return this.getRequest(APIhost, URL);
  }


  //The response is already mapped to the body, so you have no access to the headers here.
  getSummary() {
    const Host = 'coronavirus-monitor.p.rapidapi.com';
    const URL = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php';
    return this.getRequest(Host, URL);
  }

  getRequest(Host: string, URL: string) {
    let headers = this.headers.append('x-rapidapi-host', Host);
    headers.append('x-rapidapi-host', Host);
    return this.http.get(URL, { headers }).pipe(map(
      ((response: Response) => response)
    ));
  }
}
