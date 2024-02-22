import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {

  private http;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;

  }

  public patient = {
    firstName: null,
    lastName: null,
    dob: null,
    phoneNumber: null
  }
//Press submit button and sava data
  savePatient() {
    this.http.post("http://localhost:8080/patient",this.patient)
    .subscribe(data=>{
      console.log(data)
      this.clearForm();
    })
  }
//When submit all data and clear all data
  clearForm() {
    this.patient = {
      firstName: null,
      lastName: null,
      dob: null,
      phoneNumber: null
    };
  }
}
