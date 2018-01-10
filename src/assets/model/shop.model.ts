export class ItemShopModel {
    _id: string;
    name: string
    reviews: number;
    image: string;
}

// ShopCenterModel

export class ShopModel {
    _id: string;
    coverimage: string;
    name: string;
    detail: string;
    isopen: boolean;
    promoteimage:Array<Promoteimage>
}

export class Promoteimage{
    url:string;
}