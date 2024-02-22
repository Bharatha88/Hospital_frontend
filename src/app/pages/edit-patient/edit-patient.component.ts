import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent {

  private http;

  public patient: any = {
    firstName: null,
    lastName: null,
    dob: null,
    phoneNumber: null
  }


  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.http = httpClient;
    const id = this.route.snapshot.params['id'];

    this.http.get("http://localhost:8080/patient/" + id).subscribe(data => {
      console.log(data);
      this.patient = data;
    })

  }

  savePatient() {
    this.http.put("http://localhost:8080/patient/" + this.patient.id, this.patient)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['view-patient']);
      })
  }
}
