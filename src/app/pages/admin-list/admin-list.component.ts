import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  private http;
  public adminList: any;
  public selectedAdmin:any;
  public updateAdminData: any = {}; 

  constructor(private httpClient: HttpClient,private router:Router) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadAdminInfo()
  }

  loadAdminInfo() {
    this.http.get("http://localhost:8080/admin")
      .subscribe(data => {
        console.log(data);
        this.adminList = data;
      })
  }

  setSelectedAdmin(admin:any){
    this.selectedAdmin = admin;
  }

  removeAdmin() {


    let apiUrl = "http://localhost:8080/admin/" + this.selectedAdmin.id;

    this.http.delete(apiUrl)
      .subscribe(data => {
        console.log(data);
        this.loadAdminInfo();
        this.selectedAdmin=null;
      })
  }
  editAdmin(admin: any) {
    console.log("Editing admin:", admin);
    this.router.navigate(['edit-admin',admin.id]);
  }
  

  updateAdmin() {
    if (!this.updateAdminData.id) {
      console.error("No doctor selected for update.");
      return;
    }

    let apiUrl = "http://localhost:8080/admin/" + this.updateAdminData.id;

    // Set up headers if needed
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Send the update request
    this.http.put(apiUrl, this.updateAdminData, { headers })
      .subscribe(response => {
        console.log(response);
        this.loadAdminInfo();
        this.selectedAdmin = null; // Clear selected doctor after update
        this.updateAdminData = {}; // Clear update data after update
      });
  }
}
