import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-prescription',
  templateUrl: './edit-prescription.component.html',
  styleUrls: ['./edit-prescription.component.css']
})
export class EditPrescriptionComponent {

  private http;

  public prescription: any = {
    prescriptionNumber: null,
    advice: null,
    medicine: null,
    remrk: null
  }


  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.http = httpClient;
    const id = this.route.snapshot.params['id'];

    this.http.get("http://localhost:8080/prescription/" + id).subscribe(data => {
      console.log(data);
      this.prescription = data;
    })

  }

  savePrescription() {
    this.http.put("http://localhost:8080/prescription/" + this.prescription.id, this.prescription)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['view-prescription']);
      })
  }

}
