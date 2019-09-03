import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  movies: any[];
  constructor(private router: Router, private firebase: FirebaseService) {
  }

  ionViewWillEnter() {
  this.firebase.getMovies().subscribe(data => {
      this.movies = data;
    });
  }

  GoToAddMovie() {
    this.router.navigate(['tabs/AddMovie/']);
  }

  viewDetail(id: number) {
    this.router.navigate(['tabs/EditMovie/' + id]);
  }
}
