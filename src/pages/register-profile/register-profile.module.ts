import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterProfilePage } from './register-profile';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    RegisterProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterProfilePage),
    TranslateModule.forChild(),
  ],
})
export class RegisterProfilePageModule {}
