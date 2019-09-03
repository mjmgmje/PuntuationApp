import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private booksCollection: AngularFirestoreCollection<any>;
  private books: Observable<any[]>;
  private moviesCollection: AngularFirestoreCollection<any>;
  private movies: Observable<any[]>;
  private gamesCollection: AngularFirestoreCollection<any>;
  private games: Observable<any[]>;
  // private newsCollection: AngularFirestoreCollection<any>;
  // private news: Observable<any[]>;
  // private usersCollection: AngularFirestoreCollection<any>;
  // private users: Observable<any[]>;
  // private usersCommentsCollection: AngularFirestoreCollection<any>;
  // private usersComments: Observable<any[]>;

  constructor(private db: AngularFirestore) {
    this.booksCollection = db.collection<any>('Books');

    this.books = this.booksCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.moviesCollection = db.collection<any>('Movies');

    this.movies = this.moviesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.gamesCollection = db.collection<any>('Games');

    this.games = this.gamesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );

  }
  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.moviesCollection.doc<any>(id).valueChanges();
  }

  updateMovie(movie: any, id: string) {
    return this.moviesCollection.doc(id).update(movie);
  }

  addMovie(movie: any) {
    return this.moviesCollection.add(movie);
  }

  removeMovie(id) {
    return this.moviesCollection.doc(id).delete();
  }

  getGames() {
    return this.games;
  }

  getGame(id) {
    return this.gamesCollection.doc<any>(id).valueChanges();
  }

  updateGame(game: any, id: string) {
    return this.gamesCollection.doc(id).update(game);
  }

  addGame(game: any) {
    return this.gamesCollection.add(game);
  }

  removeGame(id) {
    return this.gamesCollection.doc(id).delete();
  }

  getBooks() {
    return this.books;
  }

  getbook(id) {
    return this.booksCollection.doc<any>(id).valueChanges();
  }

  updatebook(book: any, id: string) {
    return this.booksCollection.doc(id).update(book);
  }

  addbook(book: any) {
    return this.booksCollection.add(book);
  }

  removebook(id) {
    return this.booksCollection.doc(id).delete();
  }

  // getnew(id) {
  //   return this.newsCollection.doc<Book>(id).valueChanges();
  // }

  // updatenew(New: any, id: string) {
  //   return this.newsCollection.doc(id).update(New);
  // }

  // addnew(New: any) {
  //   return this.newsCollection.add(New);
  // }

  // removenew(id) {
  //   return this.newsCollection.doc(id).delete();
  // }
}
