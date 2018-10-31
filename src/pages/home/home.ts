import { Component, ViewChild } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { unwrapResolvedMetadata } from '@angular/compiler';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('username') uname;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  signIn(){
    //console.log(this.uname.value, this.password.value);
    if(this.uname.value == "admin" && this.password.value == "admin"){
      const alert = this.alertCtrl.create({
        title: 'New Friend!',
        subTitle: 'Login Successfuly!!',
        buttons: ['OK']
      });
      alert.present();
    }
  }

}
