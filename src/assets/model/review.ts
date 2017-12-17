
export class ReviewModel {
    user: UserModel = new UserModel();
    image: string;
    shop: string;
    caption: string;
    islike: boolean;
    likes: number;
}

export class UserModel {
    displayName: string;
    profileImageURL: string;
}