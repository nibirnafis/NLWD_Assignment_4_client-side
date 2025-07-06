// import { useNavigate } from "react-router-dom";

import { useParams } from "react-router-dom";
import { useBorrowBookMutation, useGetBookQuery } from "../../redux/API/baseAPI";


const BorrowForm = () => {

    // const navigate = useNavigate()
    const { bookId } = useParams()
    const { data, isLoading } = useGetBookQuery(bookId)
    const [ borrowBook ] = useBorrowBookMutation() 

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault()
            const form = e.currentTarget
    
            const quantity = Number((form.elements.namedItem("quantity") as HTMLInputElement).value)
            const dueDateString = ((form.elements.namedItem("dueDate") as HTMLInputElement).value)
            const date = new Date(dueDateString)
            const dueDate = date.toISOString()
    
            const info = { quantity, dueDate }

            console.log(quantity, info)
            
            const res = await borrowBook({bookId, info}).unwrap()
            console.log(res)
    
            // navigate("/books")
        }


    return (
        <div className="flex flex-col items-center border-blue-900 border-[2px] rounded-2xl p-5 gap-2 mb-10">
            <p className="text-4xl font-bold text-center pb-4">Borrow This Book</p>
            {
                !isLoading &&
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <label>Quantity:
                        <input name="quantity" type="number" max= {data.data.copies} placeholder = {`maximum ${data.data.copies}`} className="flex flex-col border p-2 rounded"/>
                    </label>
                    
                    <label>Due Date:
                        <input name="dueDate" type="date" className="flex flex-col border p-2 rounded"/>
                    </label>
                    <button className="bg-blue-500 text-white rounded-xl font-bold mt-2 px-2" type="submit">Borrow</button>
                </form>
            }
        </div>
    );
};

export default BorrowForm;