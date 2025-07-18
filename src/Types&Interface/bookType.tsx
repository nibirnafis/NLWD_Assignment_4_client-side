export type IBook = {
    _id: string 
    title: string,
    author: string,
    genre: string,
    isbn: string,
    description: string,
    copies: number,
    available: boolean
}

export type addBookType = {
    title: string,
    author: string,
    genre: string,
    isbn: string,
    description: string,
    copies: number,
    available: boolean
}


export type borrowType = {
    book: {
        title: string,
        isbn: string
    }
    totalQuantity: number,
}