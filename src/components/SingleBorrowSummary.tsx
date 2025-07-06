import type { borrowType } from "../Types&Interface/bookType";


type borrowPropType = {
    summary: borrowType
}

const SingleBorrowSummary = (summary: borrowPropType) => {


    const { book, totalQuantity } = summary.summary
    const { title, isbn } = book

    return (
        <div className="flex justify-between border-blue-900 border-[2px] rounded-xl p-3 gap-2 mb-5">
            <p className="font-semibold">Title: <span className="font-normal">{title}</span></p>
            <p className="font-semibold">ISBN: <span className="font-normal">{isbn}</span></p>
            <p className="font-semibold">TOTAL BORROWED: <span className="font-normal">{totalQuantity}</span></p>
        </div>
    );
};

export default SingleBorrowSummary;