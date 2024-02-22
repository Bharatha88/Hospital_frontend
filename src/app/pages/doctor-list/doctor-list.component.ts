import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {


  private http;
  public doctorList: any;
  public selectedDoctor:any;
  public updateDoctorData: any = {}; 

  constructor(private httpClient: HttpClient,private router:Router) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadDoctorInfo()
  }

  loadDoctorInfo() {
    this.http.get("http://localhost:8080/doctor")
      .subscribe(data => {
        console.log(data);
        this.doctorList = data;
      })
  }

  setSelectedDoctor(doctor:any){
    this.selectedDoctor = doctor;
  }

  removeDoctor() {


    let apiUrl = "http://localhost:8080/doctor/" + this.selectedDoctor.id;

    this.http.delete(apiUrl)
      .subscribe(data => {
        console.log(data);
        this.loadDoctorInfo();
        this.selectedDoctor=null;
      })
  }
  editDoctor(doctor: any) {
    console.log("Editing doctor:", doctor);
    this.router.navigate(['edit-doctor',doctor.id]);
  }
  

  updateDoctor() {
    if (!this.updateDoctorData.id) {
      console.error("No doctor selected for update.");
      return;
    }

    let apiUrl = "http://localhost:8080/doctor/" + this.updateDoctorData.id;

    // Set up headers if needed
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Send the update request
    this.http.put(apiUrl, this.updateDoctorData, { headers })
      .subscribe(response => {
        console.log(response);
        this.loadDoctorInfo();
        this.selectedDoctor = null; // Clear selected doctor after update
        this.updateDoctorData = {}; // Clear update data after update
      });
  }
}
