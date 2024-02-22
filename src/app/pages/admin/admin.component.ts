import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  private http;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;

  }

  public admin = {
    firstName:null,
    lastName: null,
    gender: null,
    address: null,
  }

  saveAdmin() {
    this.http.post("http://localhost:8080/admin",this.admin)
    .subscribe(data=>{
      console.log(data)
      this.clearForm();
    })
  }
  clearForm() {
    this.admin = {
      firstName: null,
      lastName: null,
      gender: null,
      address: null,
    };
  }
}
