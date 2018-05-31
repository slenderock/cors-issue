import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  response: any;

  constructor(private httpClient: HttpClient) {}

  private get(url: string): any {
    return this.httpClient.get(url);
  }

  sendRequest(url) {
    console.log(url);
    if (url !== '') {
      this.get(url).subscribe((response) => this.response = response);
    } else {
      this.response = 'no url provided';
    }
  }
}
