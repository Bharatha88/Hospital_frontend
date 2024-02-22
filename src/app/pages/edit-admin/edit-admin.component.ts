import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css']
})
export class EditAdminComponent {

  private http;

  public admin: any = {
    firstName: null,
    lastName: null,
    gender: null,
    address: null
  }


  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.http = httpClient;
    const id = this.route.snapshot.params['id'];

    this.http.get("http://localhost:8080/admin/" + id).subscribe(data => {
      console.log(data);
      this.admin = data;
    })

  }

  saveAdmin() {
    this.http.put("http://localhost:8080/admin/" + this.admin.id, this.admin)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['view-admin']);
      })
  }
}
