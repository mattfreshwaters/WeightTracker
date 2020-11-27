type UserRole = "ROLE_ADMIN"|"ROLE_USER";

export class userData{

    token: string;
    type: string;
    id: number;
    userName: string;
    email: string;
    roles: UserRole [];

} 