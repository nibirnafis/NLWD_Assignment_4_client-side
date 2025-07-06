import { NavLink } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5"
import { useState } from "react";

const NavLinks = () => {

    const [ on, setOn ] = useState(false)


    const displayMenu = () => {
        setOn(!on)
    }


    return (
        <div className="flex flex-col items-center">
            <div className="hidden md:flex gap-3 text-white">
                <button><NavLink to='/'>Home</NavLink></button>
                <button><NavLink to='/books'>All Books</NavLink></button>
                <button><NavLink to='/create-book'>Add Books</NavLink></button>
                <button><NavLink to='/borrow-summary'>Borrow Summary</NavLink></button>
            </div>

            <div className= { on ? "flex flex-col fixed text-white bg-blue-700 rounded-xl p-3 gap-3 top-9 right-5 md:hidden lg:hidden" : "hidden"}>
                <button><NavLink to='/'>Home</NavLink></button>
                <button><NavLink to='/books'>All Books</NavLink></button>
                <button><NavLink to='/create-book'>Add Books</NavLink></button>
                <button><NavLink to='/borrow-summary'>Borrow Summary</NavLink></button>
            </div>
            
            <button onClick={displayMenu}>
                <IoMenuSharp className="text-white text-2xl md:hidden lg:hidden" />
            </button> 
        </div>
    );
};

export default NavLinks;