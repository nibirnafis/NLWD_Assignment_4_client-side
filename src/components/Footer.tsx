
const Footer = () => {
    return (
        <div className="bg-blue-500 text-white">
            <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center max-w-[1320px] m-auto py-10">
                <div className="flex flex-col justify-between">
                    <p className="text-3xl font-bold">Book Shop</p>
                    <p>www.Book-Shop.com</p>
                </div>
                <div className="flex gap-40">
                    <ul className="flex flex-col gap-4">
                        <li>Home</li>
                        <li>Products</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                    </ul>
                    <ul className="flex flex-col gap-4">
                        <li>FaceBook</li>
                        <li>Twiter</li>
                        <li>Instagram</li>
                        <li>WhatsApp</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;