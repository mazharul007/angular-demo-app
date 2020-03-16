export interface User {
    firstName: string,
    lastName: string,
    nickName: string,
    age?: number,
    userAddress?: {
        street?: string,
        city?: string,
        postalCode?: number
    },
    
    isActive?: boolean,
    joinedDate?: any,
    gender?: string,
    hide?: boolean,
    companyName?: string,
}

