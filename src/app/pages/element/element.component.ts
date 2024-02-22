import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent {
  private http;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;

  }

  public element = {
    elementNumber: null,
    unitPrice: null,
    description: null,
    quantity: null
  }

  //Press submit button and save all data
  saveElement() {
    this.http.post("http://localhost:8080/element",this.element)
    .subscribe(data=>{
      console.log(data)
      this.clearForm();
    })
  }
//When Sumbitting all data clear the form
  clearForm() {
    this.element = {
    elementNumber: null,
    unitPrice: null,
    description: null,
    quantity: null
    };
  }

}
