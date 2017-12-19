import { NgModule } from '@angular/core';
import { PreloadImageComponent } from './preload-image/preload-image';
import { IonicModule } from 'ionic-angular';
import { GridShopYComponent } from './grid-shop-y/grid-shop-y';
import { Ionic2RatingModule } from 'ionic2-rating';
@NgModule({
	declarations: [
		PreloadImageComponent,
		GridShopYComponent
	],
	imports: [
		IonicModule,
		Ionic2RatingModule
	],
	exports: [
		PreloadImageComponent,
		GridShopYComponent
	]
})
export class ComponentsModule { }
