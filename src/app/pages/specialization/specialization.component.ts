import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-specialization',
  templateUrl: './specialization.component.html',
  styleUrls: ['./specialization.component.css']
})
export class SpecializationComponent {

  private http;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;

  }

  public specialization = {
    specializationSection: null,
  }
//Press submit button and save all data
  saveSpecialization() {
    this.http.post("http://localhost:8080/specialization", this.specialization)
      .subscribe(data => {
        console.log(data)
        this.clearForm();
      })
  }

  //When press submit button and clear all data
  clearForm() {
    this.specialization = {
      specializationSection: null,
    };
  }
}
