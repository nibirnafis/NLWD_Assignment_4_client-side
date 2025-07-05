import { Link, useNavigate } from "react-router-dom";
import type { IBook } from "../../Types&Interface/bookType"
import { useState } from "react";
import { useDeleteBookMutation } from "../../redux/API/baseAPI";

type bookPropType = {
    book: IBook
} 

const Book = (book: bookPropType) => {

    const navigate = useNavigate()

    const [ deleteBook ] = useDeleteBookMutation()
    
    const { _id, title, author, genre, isbn, copies, available } = book.book
    const [ display, setDisplay ] = useState(false)

    const displayWarning = () => {
        console.log("Do you want to delete this book?")
        setDisplay(!display)
    }

    const closeWarning = () => {
        setDisplay(!display)
    }

    const handleDeleteBook = async() => {
        const res = await deleteBook(_id).unwrap()
        console.log(res)
        navigate("/")
    }



    return (
        <div className="border-1 border-amber-500 relative">
            <div className={
                !display ? 
                "bg-amber-50 absolute h-full invisible"
                :
                "bg-amber-50 absolute h-full"
                }>
                <p>Do you want to delete this book?</p>
                <button onClick={handleDeleteBook} className="bg-red-500">Yes</button>
                <button onClick={closeWarning} className="bg-green-500">No</button>
            </div>
            <p>Title: {title}</p>
            <p>Author: {author}</p>
            <p>Genre: {genre}</p>
            <p>ISBN: {isbn}</p>
            <p>Copies: {copies}</p>
            <p>Available: {available ? "Yes" : "No"}</p>
            <button className="bg-amber-500"><Link to={`/edit-book/${_id}`}>Edit</Link></button>
            <button className="bg-blue-500"><Link to={`/books/${_id}`}>Detail</Link></button>
            <button onClick={displayWarning} className="bg-red-500">Delete</button>
            <button className="bg-green-500">Borrow</button>
        </div>
    );
};

export default Book;