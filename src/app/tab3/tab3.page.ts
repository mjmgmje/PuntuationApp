import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  games: any[];
  constructor(private router: Router, private firebase: FirebaseService) {
  }

  ionViewWillEnter() {
      this.firebase.getGames().subscribe(data => {
      this.games = data;
    });
  }

  GoToAddGame() {
    this.router.navigate(['tabs/AddGame/']);
  }
  viewDetail(id: number) {
    this.router.navigate(['tabs/EditGame/' + id]);
  }
}
