import { useNavigate, useParams } from "react-router-dom";
import type { addBookType } from "../../Types&Interface/bookType";
import { useEditBookMutation, useGetBookQuery } from "../../redux/API/baseAPI";

const EditForm = () => {

        const navigate = useNavigate()
        const { id } = useParams()
        const { data, isLoading } = useGetBookQuery(id)
        const [ editBook ] = useEditBookMutation()


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
    
            const editedBook: addBookType = {title, author, genre, isbn, description, copies, available}
            // console.log(editedBook)
            
            const res = await editBook({id, editedBook}).unwrap()
            console.log(res)
    
            navigate("/books")
        }

    return (
        <div>
            <p>This is Edit Books</p>
            {
                !isLoading &&
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label>Enter Book title:
                        <input name="title" type="text" defaultValue={`${data.data.title}`} className="flex flex-col border p-2 rounded"/>
                    </label>

                    <label>Enter Author:
                        <input name="author" type="text" defaultValue={`${data.data.author}`} className="flex flex-col border p-2 rounded"/>
                    </label>
                    
                    <label>Enter Genre:
                        <input name="genre" type="text" defaultValue={`${data.data.genre}`} className="flex flex-col border p-2 rounded"/>
                    </label>

                    <label>Enter ISBN:
                        <input name="isbn" type="text" defaultValue={`${data.data.isbn}`} className="flex flex-col border p-2 rounded"/>
                    </label>

                    <label>Enter Description:
                        <input name="description" type="text" defaultValue={`${data.data.description}`} className="flex flex-col border p-2 rounded"/>
                    </label>

                    <label>Enter Copies:
                        <input name="copies" type="number" defaultValue={`${data.data.copies}`} className="flex flex-col border p-2 rounded"/>
                    </label>
                    
                    <label>Available:
                        <input name="available" type="checkbox" defaultChecked className="flex flex-col border p-2 rounded"/>
                    </label>
                    <button type="submit">Update Book</button>
                </form>
            }
        </div>
    );
};

export default EditForm;