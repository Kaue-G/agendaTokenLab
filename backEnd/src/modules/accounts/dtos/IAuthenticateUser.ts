interface IAuthenticateUser {
    user: {
        nick_name: string,
        email: string
    },
    token: string;
}

export { IAuthenticateUser };