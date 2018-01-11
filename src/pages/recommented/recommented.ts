import { Component } from '@angular/core';
import { ImagePicker } from '@ionic-native/image-picker';
import { TranslateService } from '@ngx-translate/core';
import { Crop } from '@ionic-native/crop';
// import { Base64 } from '@ionic-native/base64';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { IonicPage, App, ActionSheetController, Platform, AlertController, NavController } from 'ionic-angular';
import { ReviewModel } from '../../assets/model/review.model';
import { ReviewProvider } from '../../providers/review/review';
import { AuthProvider } from '../../providers/auth/auth';
import { UserModel } from '../../assets/model/user.model';
import { LoadingProvider } from '../../providers/loading/loading';
import { Constants } from '../../app/app.constants';

import * as firebase from 'firebase';

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
    // private base64: Base64,
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
        this.dataReview = [];
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
            // this.uploadImage('file:///C:/Users/Administrator/Pictures/marshmallow-man.png').then((uploadImageData) => {
            //   alert(JSON.stringify(uploadImageData));
            //   // resolve(uploadImageData);
            // }, (uploadImageError) => {
            //   // reject(uploadImageError);
            //   alert(JSON.stringify(uploadImageError));
            // });
            // this.app.getRootNav().push('CreateReviewPage', './assets/imgs/review/review1.png');
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
      quality: 70,
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
      quality: 70,
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

    });
  }

  resizeImage(fileUri): Promise<any> {

    return new Promise((resolve, reject) => {
      this.crop.crop(fileUri, { quality: 100 }).then((cropData) => {
        this.uploadImage(cropData).then((uploadImageData) => {
          resolve(uploadImageData);
        }, (uploadImageError) => {
          reject(uploadImageError);
        });
      }, (cropError) => {
        reject(cropError);
      });
    });

  }

  uploadImage(imageString): Promise<any> {

    return new Promise((resolve, reject) => {

      this.loading.onLoading();

      const storageRef = firebase.storage().ref();
      const filename = Math.floor((Date.now() / 1000) + new Date().getUTCMilliseconds());
      let imageRef = storageRef.child(`images/${filename}.png`);
      let parseUpload: any;
      let metadata = {
        contentType: 'image/png',
      };

      let xhr = new XMLHttpRequest();
      xhr.open('GET', imageString, true);
      xhr.responseType = 'blob';
      xhr.onload = (e) => {
        let blob = new Blob([xhr.response], { type: 'image/png' });

        parseUpload = imageRef.put(blob, metadata);
        parseUpload.on('state_changed', (_snapshot) => {
          let progress = (_snapshot.bytesTransferred / _snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (_snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running');
              break;
          }
        },
          (_err) => {
            reject(_err);
            this.loading.dismiss();
          },
          (success) => {
            resolve(parseUpload.snapshot.downloadURL);
            this.loading.dismiss();            
          });

      }

      xhr.send();

    });

  }

}
