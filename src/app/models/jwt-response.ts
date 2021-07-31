export interface JwtResponse {
    dataUser: {
        id: number,
        first_name: string,
        last_name: string,
        email: string,
        accessToken: string,
        expiresIn: string
    }
}