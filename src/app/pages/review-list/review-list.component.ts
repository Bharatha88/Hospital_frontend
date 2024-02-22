import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit  {

  private http;
  public reviewList: any;
  public selectedReview:any;
  public updateReviewData: any = {}; 

  constructor(private httpClient: HttpClient,private router:Router) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadReviewInfo()
  }

  loadReviewInfo() {
    this.http.get("http://localhost:8080/review")
      .subscribe(data => {
        console.log(data);
        this.reviewList = data;
      })
  }

  setSelectedReview(review:any){
    this.selectedReview = review;
  }

  removeReview() {


    let apiUrl = "http://localhost:8080/review/" + this.selectedReview.id;

    this.http.delete(apiUrl)
      .subscribe(data => {
        console.log(data);
        this.loadReviewInfo();
        this.selectedReview=null;
      })
  }
  editReview(review: any) {
    console.log("Editing review:", review);
    this.router.navigate(['edit-review',review.id]);
  }
  

  updateReview() {
    if (!this.updateReviewData.id) {
      console.error("No review selected for update.");
      return;
    }

    let apiUrl = "http://localhost:8080/review/" + this.updateReviewData.id;

    // Set up headers if needed
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // Send the update request
    this.http.put(apiUrl, this.updateReviewData, { headers })
      .subscribe(response => {
        console.log(response);
        this.loadReviewInfo();
        this.selectedReview = null; // Clear selected doctor after update
        this.updateReviewData = {}; // Clear update data after update
      });
  }
}
