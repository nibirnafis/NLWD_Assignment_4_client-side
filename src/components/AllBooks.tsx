import { useGetBooksQuery } from "../redux/API/baseAPI";
import Book from "./books/Book";
import type { IBook } from "../Types&Interface/bookType"



const AllBooks = () => {

    const { data, isLoading } = useGetBooksQuery(undefined)

    return (
        <>
            <p className="text-4xl font-bold text-center pb-4">All Books</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 mb-10">
                {
                    !isLoading &&
                    data.data.map((book: IBook) => <Book key={book._id} book={book}></Book>)
                }
            </div>
        </>
    );
};

export default AllBooks;