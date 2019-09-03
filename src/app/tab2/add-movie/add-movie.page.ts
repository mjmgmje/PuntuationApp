import { FirebaseService } from './../../services/firebase.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.page.html',
  styleUrls: ['./add-movie.page.scss'],
})
export class AddMoviePage {
  classValue: string;
  classPValue: string;
  Title: string;
  Description: string;
  thumb: string;
  FormMovie: FormGroup;
  paramId: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private alertController: AlertController,
    private firebase: FirebaseService
  ) {
    this.FormMovie = new FormGroup({
      Title: new FormControl(),
      Description: new FormControl(),
      PValue: new FormControl(),
    });
  }

  ionViewWillEnter() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.paramId = params.get('paramId');
      if (this.paramId !== null) {
        this.firebase.getbook(this.paramId).subscribe(data => {
          this.classValue = data.PValue;
          this.classPValue = 'p' + data.PValue;
          this.Description = data.Description;
          this.Title = data.Title;
          this.thumb = data.Thumb;
        });
      } else {
        this.classValue = '0';
        this.classPValue = 'p0';
        this.Title = '';
        this.Description = '';
        this.thumb = '';
      }
    });
   }

  ChangeValue(event) {
    const valp = event.target.value;
    this.classPValue = 'p' + valp;
    this.classValue = valp;
  }

  async addThumb() {
    const alert = await this.alertController.create({
      header: 'Cambia la imagen',
      message: 'Añade la URL de la imagen que quieras añadir aqui',
      inputs: [
        {
          name: 'image',
          placeholder: 'URL imagen'
        },
      ],
      animated: true,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: data => {
            this.thumb = data.image;
          }
        }
      ],
      backdropDismiss: true
    });
    await alert.present();
  }

  addMovie(value) {
    if (this.paramId !== null) {
      const data = JSON.parse(JSON.stringify(value));
      data.Description = this.Description;
      data.PValue = this.classValue;
      if (this.thumb) {
        data.Thumb = this.thumb;
        this.firebase.updateMovie(data, this.paramId);
      }
    } else {
      const data = JSON.parse(JSON.stringify(value));
      if (this.thumb) {
        data.Thumb = this.thumb;
        this.firebase.addMovie(data);
      }
    }
  }

}
