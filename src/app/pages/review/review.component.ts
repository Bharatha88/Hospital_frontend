import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {

  private http;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;

  }

  public review = {
    reviewNumber: null,
    rating: null,
    comment: null,
  }

  saveReview() {
    this.http.post("http://localhost:8080/review", this.review)
      .subscribe(data => {
        console.log(data)
      })
  }
}
