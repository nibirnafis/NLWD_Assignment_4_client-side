import { createBrowserRouter } from "react-router-dom";
import App from "../App"
import Home from "../components/Home";
import AddBooks from "../components/AddBooks";
import BorrowSummary from "../components/BorrowSummary";
import AllBooks from "../components/AllBooks";
import BookDetail from "../components/books/BookDetail";
import EditForm from "../components/books/EditForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/books",
                element: <AllBooks></AllBooks>,
            },
            {
                path: "/books/:id",
                element: <BookDetail></BookDetail>,
            },
            {
                path: "/create-book",
                element: <AddBooks></AddBooks>,
            },
            {
                path: "/edit-book/:id",
                element: <EditForm></EditForm>,
            },
            {
                path: "/borrow-summary",
                element: <BorrowSummary></BorrowSummary>,
            }
        ]
    }
])


export default router