import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrls: ['./edit-bill.component.css']
})
export class EditBillComponent {

  private http;

  public bill: any = {
    billNumber: null,
    amount: null,
    date: null,
  }


  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.http = httpClient;
    const id = this.route.snapshot.params['id'];

    this.http.get("http://localhost:8080/bill/" + id).subscribe(data => {
      console.log(data);
      this.bill = data;
    })
  }

  saveBill() {
    this.http.put("http://localhost:8080/bill/" + this.bill.id, this.bill)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['view-bill']);
      })
  }
}
