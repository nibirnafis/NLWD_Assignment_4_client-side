import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../redux/API/baseAPI";

const BookDetail = () => {

    const { id } = useParams()
    const { data, isLoading } = useGetBookQuery(id)
    console.log(data)

    return (
        <div>
            {
                !isLoading &&
                <div className="flex flex-col items-center border-blue-900 border-[2px] rounded-2xl p-5 gap-2 mb-10">
                <p className="text-4xl font-bold text-center pb-4">{data.data.title}</p>
                <div>
                    <p className="text-center font-semibold text-2xl">{data.data.title}</p>
                    <p className="text-center font-semibold">Author: <span className="font-normal">{data.data.author}</span></p>
                    <p className="text-center font-semibold">Genre: <span className="font-normal">{data.data.genre}</span></p>
                    <p className="text-center font-semibold">ISBN: <span className="font-normal">{data.data.isbn}</span></p>
                    <p className="text-center font-semibold">Copies: <span className="font-normal">{data.data.copies}</span></p>
                    <p className="text-center font-semibold">Available: { data.data.available && data.data.copies>0 ? <span className="text-green-500 inline font-normal">Yes</span> : <span className="text-red-500 font-normal inline">No</span> }</p>
                </div>
                </div>
            }
        </div>
    );
};

export default BookDetail;