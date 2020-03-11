export interface User{
    firstName : string,
    lastName :  string,
    nickName :  string,
    age?: number,
    userAddress?:{
        street?: string,
        city?: string,
        postalCode?: number
    },
    image?:string,
    isActive?:boolean;
}

