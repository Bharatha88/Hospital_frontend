import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent {

  private http;

  public item: any = {
    code: null,
    name: null,
    description: null,
    direction: null
  }


  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.http = httpClient;
    const id = this.route.snapshot.params['id'];

    this.http.get("http://localhost:8080/item/" + id).subscribe(data => {
      console.log(data);
      this.item = data;
    })

  }

  saveItem() {
    this.http.put("http://localhost:8080/item/" + this.item.id, this.item)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['view-item']);
      })
  }

}
