import { useGetBooksQuery } from "../redux/API/baseAPI";
import Book from "./books/Book";
import type { IBook } from "../Types&Interface/bookType"



const AllBooks = () => {

    const { data, isLoading } = useGetBooksQuery(undefined)

    return (
        <>
            <p>This is AllBooks</p>
            <div className="grid grid-cols-5">
                {
                    !isLoading &&
                    data.data.map((book: IBook) => <Book key={book._id} book={book}></Book>)
                }
            </div>
        </>
    );
};

export default AllBooks;