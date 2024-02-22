import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent {
  private http;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;

  }

  public bill = {
    billNumber:null,
    amount: null,
    date: null,
  }

  saveBill() {
    this.http.post("http://localhost:8080/bill",this.bill)
    .subscribe(data=>{
      console.log(data)
      this.clearForm();
    })
  }

  clearForm() {
    this.bill = {
      billNumber:null,
      amount: null,
      date: null,
    };
  }
}
