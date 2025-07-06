import { useGetBorrowSummaryQuery } from "../redux/API/baseAPI";
import type { borrowType } from "../Types&Interface/bookType";
import SingleBorrowSummary from "./SingleBorrowSummary";

const BorrowSummary = () => {


    const { data, isLoading } = useGetBorrowSummaryQuery(undefined)

    return (
        <div>
            <p className="text-4xl font-bold text-center pb-4">All Borrowed Books</p>
            <div className="grid grid-cols-1 mb-5">
                {
                    !isLoading &&
                    data.data.map((summary: borrowType, idx: number) => <SingleBorrowSummary key={idx} summary={summary}></SingleBorrowSummary>)
                }
            </div>
        </div>
    );
};

export default BorrowSummary;