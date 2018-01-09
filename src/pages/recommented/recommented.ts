import { Component } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker';
import { TranslateService } from '@ngx-translate/core';
import { Crop } from '@ionic-native/crop';
import { Base64 } from '@ionic-native/base64';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { IonicPage, App, ActionSheetController, Platform, AlertController, NavController } from 'ionic-angular';
import { ReviewModel } from '../../assets/model/review.model';
import { ReviewProvider } from '../../providers/review/review';
import { AuthProvider } from '../../providers/auth/auth';
import { UserModel } from '../../assets/model/user.model';
import { LoadingProvider } from '../../providers/loading/loading';
import { Constants } from '../../app/app.constants';

@IonicPage()
@Component({
  selector: 'page-recommented',
  templateUrl: 'recommented.html',
})
export class RecommentedPage {
  searchText: string = '';
  user: UserModel = new UserModel();
  dataReview: Array<ReviewModel>;
  constructor(
    public navCtrl: NavController,
    private reviewProvider: ReviewProvider,
    private app: App,
    private actionSheetCtrl: ActionSheetController,
    private translate: TranslateService,
    private platform: Platform,
    private imagePicker: ImagePicker,
    private crop: Crop,
    private base64: Base64,
    private alertCtrl: AlertController,
    private camera: Camera,
    private auth: AuthProvider,
    private loading: LoadingProvider,
  ) {
  }

  ionViewWillEnter() {
    this.auth.authenticated().then((res) => {
      if (res) {
        this.user = JSON.parse(window.localStorage.getItem('user@' + Constants.URL));
        this.getReview();
      } else {
        this.user = null;
        this.navCtrl.push('LoginPage');
      }
    });
  }

  getReview() {
    this.loading.onLoading();
    setTimeout(() => {
      this.reviewProvider.getReviews().then(res => {
        this.dataReview = res;
        this.loading.dismiss();
      }).catch(err => {
        console.log(err);
        this.loading.dismiss();
      });
    }, 1000);
  }

  doRefresh(refresher) {
    this.getReview();
    refresher.complete();
  }

  goToProfile() {
    this.app.getRootNav().push('ProfilePage');
  }

  createReview() {

    let btn1;
    let btn2;
    let language = this.translate.currentLang;
    if (language === 'th') {
      btn1 = 'อัลบั้มรูป';
      btn2 = 'กล้องถ่ายรูป';
    } else {
      btn1 = 'Gallery';
      btn2 = 'Camera';
    }

    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: btn1,
          handler: () => {
            if (this.platform.is('cordova')) {
              this.onImagePicker();
            }
          }
        },
        {
          text: btn2,
          handler: () => {
            if (this.platform.is('cordova')) {
              this.onCamera();
            }
          }
        }
      ]
    });

    actionSheet.present();
  }

  onImagePicker() {
    let options = {
      maximumImagesCount: 1,
      width: 900,
      quality: 30,
      outputType: 0
    };
    this.imagePicker.getPictures(options).then((results) => {
      if (results === 'OK') {
        results = [];
      }
      for (let i = 0; i < results.length; i++) {
        let fileUri = results[i];
        if (this.platform.is('android')) {
          fileUri = 'file://' + fileUri;
        }
        this.resizeImage(fileUri).then((resizeImageData) => {
          this.app.getRootNav().push('CreateReviewPage', resizeImageData);
        }, (resizeImageError) => {

          let alert = this.alertCtrl.create({
            title: 'Resize image',
            subTitle: 'Resize image error',
            mode: 'ios',
            buttons: ['OK']
          });
          alert.present();

        });
      }
    });
  }

  onCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {

      this.resizeImage(imageData).then((resizeImageData) => {
        this.app.getRootNav().push('CreateReviewPage', resizeImageData);
      }, (resizeImageError) => {

        let alert = this.alertCtrl.create({
          title: 'Resize image',
          subTitle: 'Resize image error',
          mode: 'ios',
          buttons: ['OK']
        });
        alert.present();

      });

    }, (err) => {
      // let alert = this.alertCtrl.create({
      //   title: 'Camera',
      //   subTitle: 'Camera error',
      //   mode: 'ios',
      //   buttons: ['OK']
      // });
      // alert.present();
    });
  }

  resizeImage(fileUri): Promise<any> {

    return new Promise((resolve, reject) => {
      this.crop.crop(fileUri, { quality: 50 }).then((cropData) => {
        alert(JSON.stringify(cropData));
        this.base64.encodeFile(cropData).then((base64File: string) => {
          alert('base64 : 1');
          let base64img = base64File.replace(/\n/g, '');
          base64img = base64img.replace('data:image/*;charset=utf-8;base64,', 'data:image/jpg;base64,');
          alert('base64 : 2');
          resolve(base64img);
        }, (base64Err) => {

          let alert = this.alertCtrl.create({
            title: 'Base64',
            subTitle: 'Base64 error',
            mode: 'ios',
            buttons: ['OK']
          });
          alert.present();

        });
      }, (cropError) => {
        reject(cropError);
      });
    });

  }


}
