import { NavLink } from "react-router-dom";

const NavLinks = () => {
    return (
        <div>
            <button><NavLink to='/'>Home</NavLink></button>
            <button><NavLink to='/books'>All Books</NavLink></button>
            <button><NavLink to='/create-book'>Add Books</NavLink></button>
            <button><NavLink to='/borrow-summary'>Borrow Summary</NavLink></button>
        </div>
    );
};

export default NavLinks;