import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-element',
  templateUrl: './edit-element.component.html',
  styleUrls: ['./edit-element.component.css']
})
export class EditElementComponent {

  private http;

  public element: any = {
    elementNumber: null,
    unitPrice: null,
    description: null,
    quantity: null
  }


  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.http = httpClient;
    const id = this.route.snapshot.params['id'];

    this.http.get("http://localhost:8080/element/" + id).subscribe(data => {
      console.log(data);
      this.element = data;
    })

  }

  saveElement() {
    this.http.put("http://localhost:8080/element/" + this.element.id, this.element)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['view-element']);
      })
  }

}
