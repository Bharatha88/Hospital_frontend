import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent {
  private http;

  public doctor: any = {
    firstName: null,
    lastName: null,
    age: null,
    experience: null
  }


  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.http = httpClient;
    const id = this.route.snapshot.params['id'];

    this.http.get("http://localhost:8080/doctor/" + id).subscribe(data => {
      console.log(data);
      this.doctor = data;
    })

  }

  saveDoctor() {
    this.http.put("http://localhost:8080/doctor/" + this.doctor.id, this.doctor)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['view-doctor']);
      })
  }
}
