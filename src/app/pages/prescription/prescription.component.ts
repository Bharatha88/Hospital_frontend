import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent {

  private http;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;

  }

  public prescription = {
    prescriptionNumber: null,
    advice: null,
    medicine: null,
    remark: null
  }

  savePrescription() {
    this.http.post("http://localhost:8080/prescription", this.prescription)
      .subscribe(data => {
        console.log(data)
        this.clearForm();
      })
  }

  clearForm() {
    this.prescription = {
      prescriptionNumber: null,
      advice: null,
      medicine: null,
      remark: null
    };
  }
}
