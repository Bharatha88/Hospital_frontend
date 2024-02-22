import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent implements OnInit {

  private http;
  public billList: any;
  public selectedBill: any;
  public updateBillData: any = {};


  constructor(private httpClient: HttpClient, private router: Router) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadBillInfo()
  }

  loadBillInfo() {
    this.http.get("http://localhost:8080/bill")
      .subscribe(data => {
        console.log(data);
        this.billList = data;
      })
  }

  setSelectedBill(bill: any) {
    this.selectedBill = bill;
  }

  removeBill() {

    let apiUrl = "http://localhost:8080/bill/" + this.selectedBill.id;

    this.http.delete(apiUrl)
      .subscribe(data => {
        console.log(data);
        this.loadBillInfo();
        this.selectedBill = null;
      })
  }
  
  editBill(bill: any) {
    console.log("Editing bill:", bill);
    this.router.navigate(['edit-bill', bill.id]);
  }

  updateBill() {
    if (!this.updateBillData.id) {
      console.error("No doctor selected for update.");
      return;
    }

    let apiUrl = "http://localhost:8080/bill/" + this.updateBillData.id;

    // Set up headers if needed
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Send the update request
    this.http.put(apiUrl, this.updateBillData, { headers })
      .subscribe(response => {
        console.log(response);
        this.loadBillInfo();
        this.selectedBill = null; // Clear selected bill after update
        this.updateBillData = {}; // Clear update data after update
      });
  }
}
