import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent {

  private http;

  public appointment: any = {
    appointmentNumber: null,
    doctorName: null,
    patientName: null,
    status: null,
    dateAndTime:null
  }


  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.http = httpClient;
    const id = this.route.snapshot.params['id'];

    this.http.get("http://localhost:8080/appointment/" + id).subscribe(data => {
      console.log(data);
      this.appointment = data;
    })

  }

  saveAppointment() {
    this.http.put("http://localhost:8080/appointment/" + this.appointment.id, this.appointment)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['view-appointment']);
      })
  }
}
