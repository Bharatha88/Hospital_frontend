import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  private http;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;

  }

  public item = {
    code: null,
    Name: null,
    description: null,
    direction: null
  }
//Press submit button and save all data
  saveItem() {
    this.http.post("http://localhost:8080/item",this.item)
    .subscribe(data=>{
      console.log(data)
      this.clearForm();
    })
  }
//When press submit button and clear all data
  clearForm() {
    this.item = {
      code: null,
      Name: null,
      description: null,
      direction: null
    };
  }
}
