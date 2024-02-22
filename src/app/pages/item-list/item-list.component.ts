import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
 
  private http;
  public itemList: any;
  public selectedItem:any;
  public updateItemData: any = {}; 

  constructor(private httpClient: HttpClient,private router:Router) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadItemInfo()
  }

  loadItemInfo() {
    this.http.get("http://localhost:8080/item")
      .subscribe(data => {
        console.log(data);
        this.itemList = data;
      })
  }

  setSelectedItem(item:any){
    this.selectedItem = item;
  }

  removeItem() {


    let apiUrl = "http://localhost:8080/item/" + this.selectedItem.id;

    this.http.delete(apiUrl)
      .subscribe(data => {
        console.log(data);
        this.loadItemInfo();
        this.selectedItem=null;
      })
  }
  editItem(item: any) {
    console.log("Editing item:", item);
    this.router.navigate(['edit-item',item.id]);
  }
  

  updateItem() {
    if (!this.updateItemData.id) {
      console.error("No item selected for update.");
      return;
    }

    let apiUrl = "http://localhost:8080/item/" + this.updateItemData.id;

    // Set up headers if needed
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Send the update request
    this.http.put(apiUrl, this.updateItemData, { headers })
      .subscribe(response => {
        console.log(response);
        this.loadItemInfo();
        this.selectedItem = null; // Clear selected doctor after update
        this.updateItemData = {}; // Clear update data after update
      });
  }
}
