import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  
  private http;
  public patientList: any;
  public selectedPatient:any;
  public updatePatientData: any = {}; 

  constructor(private httpClient: HttpClient,private router:Router) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadPatientInfo()
  }

  loadPatientInfo() {
    this.http.get("http://localhost:8080/patient")
      .subscribe(data => {
        console.log(data);
        this.patientList = data;
      })
  }

  setSelectedPatient(patient:any){
    this.selectedPatient = patient;
  }

  removePatient() {


    let apiUrl = "http://localhost:8080/patient/" + this.selectedPatient.id;

    this.http.delete(apiUrl)
      .subscribe(data => {
        console.log(data);
        this.loadPatientInfo();
        this.selectedPatient=null;
      })
  }
  editPatient(patient: any) {
    console.log("Editing patient:", patient);
    this.router.navigate(['edit-patient',patient.id]);
  }
  

  updatePatient() {
    if (!this.updatePatientData.id) {
      console.error("No patient selected for update.");
      return;
    }

    let apiUrl = "http://localhost:8080/patient/" + this.updatePatientData.id;

    // Set up headers if needed
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Send the update request
    this.http.put(apiUrl, this.updatePatientData, { headers })
      .subscribe(response => {
        console.log(response);
        this.loadPatientInfo();
        this.selectedPatient = null; // Clear selected doctor after update
        this.updatePatientData = {}; // Clear update data after update
      });
  }
}
