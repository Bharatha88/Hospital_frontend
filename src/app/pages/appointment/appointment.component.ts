import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {

  private http;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;

  }

  public appointment = {
    appointmentNumber:null,
    doctorName: null,
    patientName: null,
    status: null,
    dateAndTime: null
  }

  saveAppointment() {
    this.http.post("http://localhost:8080/appointment",this.appointment)
    .subscribe(data=>{
      console.log(data)
      this.clearForm();
    })
  }
  
  clearForm() {
    this.appointment = {
    appointmentNumber:null,
    doctorName: null,
    patientName: null,
    status: null,
    dateAndTime: null
    };
  }
}
