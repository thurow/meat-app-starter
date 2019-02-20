export class User {
    constructor(public email: string,
                public name: string,
                private password: string
    ) {}

    matches(another: User): boolean {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    }
}

export const users: {[key: string]: User} = {
    'teste@teste.com': new User('teste@teste.com', 'Teste', '123123'),
    'alexandre@teste.com': new User('alexandre@teste.com', 'Alexandre', '123123')
}
