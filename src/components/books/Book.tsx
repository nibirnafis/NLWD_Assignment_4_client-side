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
        <div className="border-1 border-blue-500 rounded-xl relative">
            <div className={
                !display ? 
                "bg-amber-50 absolute h-full invisible"
                :
                "bg-amber-50 absolute h-full rounded-xl  w-full text-center"
                }>
                <p className="">Do you want to delete this book?</p>
                <button onClick={handleDeleteBook} className="bg-red-500 text-white rounded-md px-2">Yes</button>
                <button onClick={closeWarning} className="bg-green-500 text-white rounded-md px-2">No</button>
            </div>
            <div className="flex flex-col items-center py-5">
                <div className="flex flex-col items-center">
                    <p className="font-semibold text-2xl text-center">{title}</p>
                    <p className="font-semibold">Author: <span className="font-normal">{author}</span></p>
                    <p className="font-semibold">Genre: <span className="font-normal">{genre}</span></p>
                    <p className="font-semibold">ISBN: <span className="font-normal">{isbn}</span></p>
                    <p className="font-semibold">Copies: <span className="font-normal">{copies}</span></p>
                    <p className="font-semibold">Available: { available && copies>0 ? <span className="text-green-500 inline font-normal">Yes</span> : <span className="text-red-500 font-normal inline">No</span> }</p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    <button className="bg-amber-500 text-white px-1 rounded-md"><Link to={`/edit-book/${_id}`}>Edit</Link></button>
                    <button className="bg-blue-500 text-white px-1 rounded-md"><Link to={`/books/${_id}`}>Detail</Link></button>
                    <button onClick={displayWarning} className="bg-red-500 text-white px-1 rounded-md">Delete</button>
                    <button className="bg-green-500 text-white px-1 rounded-md"><Link to={`/borrow/${_id}`}>Borrow</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Book;