export default function Navbar({ activePage, setActivePage }) {
    function handlePageChange(page) {
        setActivePage(page);
    }

    return (
        <div className="fixed z-30 grid grid-cols-6 place-items-center w-screen py-8 pb-8 bg-gradient-to-b bg-opacity-50 from-black to-transparent">
            <a href={"https://chapterspot.triangle.org/home"} target={"_blank"}>
                <img src="t.png" alt="logo" className={"cursor-pointer w-36 h-auto grayscale brightness-200 hover:grayscale-0 transition-all duration-300"} />
            </a>

            {["home", "everyman", "pledge-test", "calendar", "contacts"].map((page) => (
                <h4
                    key={page}
                    className={`cursor-pointer transition-all duration-500 hover:text-white ${
                        activePage === page ? "text-white font-bold underline decoration-4 decoration-[#990033] underline-offset-4" : 
                            "text-white"
                    }`}
                    onClick={() => handlePageChange(page)}
                >
                    {page
                        .split('-') // Split string by hyphen
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
                        .join(' ') // Join words back with spaces
                    }
                </h4>
            ))}
        </div>
    );
}
