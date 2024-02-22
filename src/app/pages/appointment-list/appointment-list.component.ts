import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  private http;
  public appointmentList: any;
  public selectedAppointment:any;
  public updateAppointmentData: any = {}; 
   

  constructor(private httpClient: HttpClient,private router:Router) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadAppointmentInfo()
  }

  loadAppointmentInfo() {
    this.http.get("http://localhost:8080/appointment")
      .subscribe(data => {
        console.log(data);
        this.appointmentList = data;
      })
  }

  setSelectedAppointment(appointment:any){
    this.selectedAppointment = appointment;
  }

  removeAppointment() {


    let apiUrl = "http://localhost:8080/appointment/" + this.selectedAppointment.id;

    this.http.delete(apiUrl)
      .subscribe(data => {
        console.log(data);
        this.loadAppointmentInfo();
        this.selectedAppointment=null;
      })
  }
  editAppointment(appointment: any) {
    console.log("Editing appointment:", appointment);
    this.router.navigate(['edit-appointment',appointment.id]);
  }
  

  updateAppointment() {
    if (!this.updateAppointmentData.id) {
      console.error("No doctor selected for update.");
      return;
    }

    let apiUrl = "http://localhost:8080/appointment/" + this.updateAppointmentData.id;

    // Set up headers if needed
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Send the update request
    this.http.put(apiUrl, this.updateAppointmentData, { headers })
      .subscribe(response => {
        console.log(response);
        this.loadAppointmentInfo();
        this.selectedAppointment = null; // Clear selected doctor after update
        this.updateAppointmentData = {}; // Clear update data after update
      });
  }
}
