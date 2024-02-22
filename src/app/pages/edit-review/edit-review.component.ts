import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})
export class EditReviewComponent {

  private http;

  public review: any = {
    reviewNumber: null,
    rating: null,
    comment: null,
  }


  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.http = httpClient;
    const id = this.route.snapshot.params['id'];

    this.http.get("http://localhost:8080/review/" + id).subscribe(data => {
      console.log(data);
      this.review = data;
    })

  }

  saveReview() {
    this.http.put("http://localhost:8080/review/" + this.review.id, this.review)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['view-review']);
      })
  }

}
