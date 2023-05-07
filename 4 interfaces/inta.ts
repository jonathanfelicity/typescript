interface IAccout{
    id: number,
    email: string,
    status?: string,
    deposit?: ()=> void
}



let _user: IAccout = {
    id: 1,
    email: "j@fake.com",
    
}


let _accounts: IAccout[] = [
    {
        id: 2,
        email: "c@f.c"
    }
]