import NavLinks from "./NavLinks";



const Navbar = () => {
    return (
        <div className="bg-blue-500">
            <div className="flex justify-between items-center py-3 mb-10 max-w-[1320px] m-auto px-3">
                <p className="text-white text-2xl md:text-3xl lg:text-3xl font-bold">Book Shop</p>
                <NavLinks></NavLinks>
            </div>
        </div>
    );
};

export default Navbar;