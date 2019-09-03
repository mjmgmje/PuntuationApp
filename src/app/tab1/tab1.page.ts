import { FirebaseService } from './../services/firebase.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  books: any[];
  constructor(private router: Router, private firebase: FirebaseService) {
  }

  ionViewWillEnter() {
     this.firebase.getBooks().subscribe(data => {
      this.books = data;

    });
  }

  GoToAddBook() {
    this.router.navigate(['tabs/AddBook/']);
  }

  viewDetail(id: number) {
    this.router.navigate(['tabs/EditBook/' + id]);
  }
}
