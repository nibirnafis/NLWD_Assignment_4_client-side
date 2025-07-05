import { useNavigate } from "react-router-dom";
import { useAddBookMutation } from "../redux/API/baseAPI";
import type { addBookType } from "../Types&Interface/bookType";

const AddBooks = () => {

    const navigate = useNavigate()

    const [ addBook ] = useAddBookMutation()

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget

        const title = (form.elements.namedItem("title") as HTMLInputElement).value
        const author = (form.elements.namedItem("author") as HTMLInputElement).value
        const genre = (form.elements.namedItem("genre") as HTMLInputElement).value
        const isbn = (form.elements.namedItem("isbn") as HTMLInputElement).value
        const description = (form.elements.namedItem("description") as HTMLInputElement).value
        const copies = Number((form.elements.namedItem("copies") as HTMLInputElement).value)
        const available = (form.elements.namedItem("available") as HTMLInputElement).checked

        const newBook: addBookType = {title, author, genre, isbn, description, copies, available}
        // console.log(newBook)
        
        const res = await addBook(newBook).unwrap()
        console.log(res)

        navigate("/books")
    }



    return (
        <div>
            <p>This is AddBooks</p>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label>Enter Book title:
                    <input name="title" type="text" className="flex flex-col border p-2 rounded"/>
                </label>

                <label>Enter Author:
                    <input name="author" type="text" className="flex flex-col border p-2 rounded"/>
                </label>
                
                <label>Enter Genre:
                    <input name="genre" type="text" className="flex flex-col border p-2 rounded"/>
                </label>

                <label>Enter ISBN:
                    <input name="isbn" type="text" className="flex flex-col border p-2 rounded"/>
                </label>

                <label>Enter Description:
                    <input name="description" type="text" className="flex flex-col border p-2 rounded"/>
                </label>

                <label>Enter Copies:
                    <input name="copies" type="number" className="flex flex-col border p-2 rounded"/>
                </label>
                
                <label>Available:
                    <input name="available" type="checkbox" defaultChecked className="flex flex-col border p-2 rounded"/>
                </label>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};

export default AddBooks;