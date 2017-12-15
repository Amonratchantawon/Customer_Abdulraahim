export class HomeModel {
    ads: AdsModel = new AdsModel();
    hotprices: HotpricesModel = new HotpricesModel();
    categories: CategoriesModel = new CategoriesModel();
    shop: Array<shopModel>;
}

export class HotpricesModel {
    title:string;
    items1: Array<HotpriceModel>;
    items2: Array<HotpriceModel>;;
}

export class AdsModel {
    title: string;
    items: Array<ItemAdsModel>;
}

export class ItemAdsModel {
    _id: string;
    image: string;
    videoId: string;
    isvideo: boolean;
}

export class HotpriceModel {
    title: string;
    items: Array<ItemHotpricesModel>;
}

export class ItemHotpricesModel {
    _id: string;
    image: string;
}

export class CategoriesModel {
    title: string;
    items: Array<ItemCategoriesModel>;
}

export class ItemCategoriesModel {
    _id: string;
    image: string;
}

export class shopModel {
    title: string;
    items: Array<ItemShopModel>;
}

export class ItemShopModel {
    _id: string;
    name: string
    review: number;
    image: string;
}

