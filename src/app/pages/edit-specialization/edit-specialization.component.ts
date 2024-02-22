import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-specialization',
  templateUrl: './edit-specialization.component.html',
  styleUrls: ['./edit-specialization.component.css']
})
export class EditSpecializationComponent {

  private http;

  public specialization: any = {
    specializationSection: null,
  }


  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.http = httpClient;
    const id = this.route.snapshot.params['id'];

    this.http.get("http://localhost:8080/specialization/" + id).subscribe(data => {
      console.log(data);
      this.specialization = data;
    })

  }

  saveSpecialization() {
    this.http.put("http://localhost:8080/specialization/" + this.specialization.id, this.specialization)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['view-specialization']);
      })
  }
}
