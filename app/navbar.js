import { BsList } from "react-icons/bs";
import { useState } from "react";

export default function Navbar({ activePage, setActivePage }) {
    const [menuOpen, setMenuOpen] = useState(false);

    function handlePageChange(page) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setActivePage(page);
        setMenuOpen(false);
    }

    return (
        <>
            <div className="hidden sm:grid fixed z-30 grid-cols-5 place-items-center w-screen py-8 pb-8 bg-gradient-to-b bg-opacity-50 from-[#171717] to-transparent">
                <a href={"https://chapterspot.triangle.org/home"} target={"_blank"}>
                    <img src="t.png" alt="logo" className={"cursor-pointer w-36 h-auto grayscale brightness-200 hover:grayscale-0 transition-all duration-300"} />
                </a>

                {["home", "schedule", "everyman", "pledge-test"].map((page) => (
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
            <div className={'w-screen flex flex-row justify-between sm:hidden py-4 px-4 border-none'}>
                <a href={"https://chapterspot.triangle.org/home"} target={"_blank"}>
                    <img src="t.png" alt="logo" className={"cursor-pointer max-w-28 h-auto grayscale brightness-200 hover:grayscale-0 transition-all duration-300"} />
                </a>
                <button className="scale-150 text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
                    <BsList />
                </button>
            </div>
            {menuOpen && (
                <div className="fixed w-screen md:hidden z-30 flex flex-col items-center gap-4 py-4 bg-[#171717]">
                    {["home", "schedule", "everyman", "pledge-test"].map((page) => (
                        <h4
                            key={page}
                            className={`cursor-pointer transition-all duration-500 hover:text-white ${
                                activePage === page
                                    ? "text-white font-bold underline decoration-4 decoration-[#990033] underline-offset-4"
                                    : "text-white"
                            }`}
                            onClick={() => handlePageChange(page)}
                        >
                            {page
                                .split("-")
                                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                .join(" ")}
                        </h4>
                    ))}
                </div>
            )}
        </>

    );
}