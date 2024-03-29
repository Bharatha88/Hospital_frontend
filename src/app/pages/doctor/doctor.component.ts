import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {

  private http;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;

  }

  public doctor = {
    firstName: null,
    lastName: null,
    age: null,
    experience: null
  }

  //Press submit button and save all data
  saveDoctor() {
    this.http.post("http://localhost:8080/doctor", this.doctor)
      .subscribe(data => {
        console.log(data)
        this.clearForm();
      })
  }
  //When Submitting all data clear form
  clearForm() {
    this.doctor = {
      firstName: null,
      lastName: null,
      age: null,
      experience: null
    };
  }
}
