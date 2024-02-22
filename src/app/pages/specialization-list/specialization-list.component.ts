import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-specialization-list',
  templateUrl: './specialization-list.component.html',
  styleUrls: ['./specialization-list.component.css']
})
export class SpecializationListComponent implements OnInit{

  private http;
  public specializationList: any;
  public selectedSpecialization:any;
  public updateSpecializationData: any = {}; 

  constructor(private httpClient: HttpClient,private router:Router) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadSpecializationInfo()
  }

  loadSpecializationInfo() {
    this.http.get("http://localhost:8080/specialization")
      .subscribe(data => {
        console.log(data);
        this.specializationList = data;
      })
  }

  setSelectedSpecialization(specialization:any){
    this.selectedSpecialization = specialization;
  }

  removeSpecialization() {


    let apiUrl = "http://localhost:8080/specialization/" + this.selectedSpecialization.id;

    this.http.delete(apiUrl)
      .subscribe(data => {
        console.log(data);
        this.loadSpecializationInfo();
        this.selectedSpecialization=null;
      })
  }
  editSpecialization(specialization: any) {
    console.log("Editing specialization:", specialization);
    this.router.navigate(['edit-specialization',specialization.id]);
  }
  

  updateSpecialization() {
    if (!this.updateSpecializationData.id) {
      console.error("No specialization selected for update.");
      return;
    }

    let apiUrl = "http://localhost:8080/specialization/" + this.updateSpecializationData.id;

    // Set up headers if needed
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Send the update request
    this.http.put(apiUrl, this.updateSpecializationData, { headers })
      .subscribe(response => {
        console.log(response);
        this.loadSpecializationInfo();
        this.selectedSpecialization = null; // Clear selected doctor after update
        this.updateSpecializationData = {}; // Clear update data after update
      });
  }
}
