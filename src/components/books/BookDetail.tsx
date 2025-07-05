import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../redux/API/baseAPI";

const BookDetail = () => {

    const { id } = useParams()
    const { data, isLoading } = useGetBookQuery(id)
    console.log(data)

    return (
        <div>
            {
                !isLoading ? 
                <div>
                    <p>id: {data.data._id}</p>
                    <p>title: {data.data.title}</p>
                    <p>author: {data.data.author}</p>
                    <p>genre: {data.data.genre}</p>
                    <p>isbn: {data.data.isbn}</p>
                    <p>copies: {data.data.copies}</p>
                    <p>available: { data.data.copies > 0 ? "Yes" : "No"}</p>
                </div> 
                : <p>Loading...</p>

            }
        </div>
    );
};

export default BookDetail;