export class User {
    username: string;
}
export class AnonymousUser extends User{

}

export class AuthenticatedUser extends User{
    wallets: []
}