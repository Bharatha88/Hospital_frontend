import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {
  
  private http;
  public prescriptionList: any;
  public selectedPrescription:any;
  public updatePrescriptionData: any = {}; 

  constructor(private httpClient: HttpClient,private router:Router) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadPrescriptionInfo()
  }

  loadPrescriptionInfo() {
    this.http.get("http://localhost:8080/prescription")
      .subscribe(data => {
        console.log(data);
        this.prescriptionList = data;
      })
  }

  setSelectedPrescription(prescription:any){
    this.selectedPrescription = prescription;
  }

  removePrescription() {


    let apiUrl = "http://localhost:8080/prescription/" + this.selectedPrescription.id;

    this.http.delete(apiUrl)
      .subscribe(data => {
        console.log(data);
        this.loadPrescriptionInfo();
        this.selectedPrescription=null;
      })
  }
  editPrescription(prescription: any) {
    console.log("Editing prescription:", prescription);
    this.router.navigate(['edit-prescription',prescription.id]);
  }
  

  updatePrescription() {
    if (!this.updatePrescriptionData.id) {
      console.error("No prescription selected for update.");
      return;
    }

    let apiUrl = "http://localhost:8080/prescription/" + this.updatePrescriptionData.id;

    // Set up headers if needed
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Send the update request
    this.http.put(apiUrl, this.updatePrescriptionData, { headers })
      .subscribe(response => {
        console.log(response);
        this.loadPrescriptionInfo();
        this.selectedPrescription = null; // Clear selected doctor after update
        this.updatePrescriptionData = {}; // Clear update data after update
      });
  }
}
