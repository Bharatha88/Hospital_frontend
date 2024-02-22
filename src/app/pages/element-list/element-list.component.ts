import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.css']
})
export class ElementListComponent implements OnInit {

  private http;
  public elementList: any;
  public selectedElement:any;
  public updateElementData: any = {}; 

  constructor(private httpClient: HttpClient,private router:Router) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadElementInfo()
  }

  loadElementInfo() {
    this.http.get("http://localhost:8080/element")
      .subscribe(data => {
        console.log(data);
        this.elementList = data;
      })
  }

  setSelectedElement(element:any){
    this.selectedElement = element;
  }

  removeElement() {


    let apiUrl = "http://localhost:8080/element/" + this.selectedElement.id;

    this.http.delete(apiUrl)
      .subscribe(data => {
        console.log(data);
        this.loadElementInfo();
        this.selectedElement=null;
      })
  }
  editElement(element: any) {
    console.log("Editing element:", element);
    this.router.navigate(['edit-element',element.id]);
  }
  

  updateElement() {
    if (!this.updateElementData.id) {
      console.error("No element selected for update.");
      return;
    }

    let apiUrl = "http://localhost:8080/element/" + this.updateElementData.id;

    // Set up headers if needed
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Send the update request
    this.http.put(apiUrl, this.updateElementData, { headers })
      .subscribe(response => {
        console.log(response);
        this.loadElementInfo();
        this.selectedElement = null; // Clear selected doctor after update
        this.updateElementData = {}; // Clear update data after update
      });
  }
}
