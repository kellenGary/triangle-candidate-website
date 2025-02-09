import {BsChevronLeft, BsChevronRight} from "react-icons/bs";
import Event from "@/app/event";
import {useState} from "react";

const events = [
    {
        name: "Bachelor Mondays",
        image: "./bachelor.jpg",
        location: "47 E 12th Ave",
        date: "every monday",
        time: "8-10p"
    },
    {
        name: "Food Bank",
        image: "./food_bank.png",
        location: "3960 Brookham Dr",
        date: "2/8",
        time: "9a - 2p"
    },
    {
        name: "Valentine's Party w/ ASU",
        image: "./ASU-valentines-day.png",
        location: "47 E 12th Ave",
        date: "2/15",
        time: "9p - 2a"
    },
];

export default function EventCarousel() {
    const [index, setIndex] = useState(1); // Start with second event centered

    const nextSlide = () => setIndex((prev) => (prev + 1) % events.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + events.length) % events.length);

    return (
        <div className="flex items-center justify-center gap-4 w-full py-8">
            <BsChevronLeft className="scale-[2] cursor-pointer" onClick={prevSlide} />
            <div className="relative w-[70rem] h-[30rem] max-h-[30rem] flex justify-center items-center overflow-hidden">
                {events.map((event, i) => {
                    const position = (i - index + events.length) % events.length;

                    let transformStyle = "translate-x-[-200%] opacity-0 scale-90";
                    let zIndex = "z-0";

                    if (position === 0) {
                        transformStyle = "translate-x-[-110%] opacity-60 scale-95";
                        zIndex = "z-10";
                    }
                    if (position === 1) {
                        transformStyle = "translate-x-0 opacity-100 scale-105";
                        zIndex = "z-20";
                    }
                    if (position === 2) {
                        transformStyle = "translate-x-[110%] opacity-60 scale-95";
                        zIndex = "z-10";
                    }

                    return (
                        <div
                            key={i}
                            className={`absolute transition-all duration-500 ease-in-out ${transformStyle} ${zIndex}`}
                        >
                            <Event {...event} focused={position === 1} />
                        </div>
                    );
                })}
            </div>

            <BsChevronRight className="scale-[2] cursor-pointer" onClick={nextSlide} />
        </div>
    )
}