import EventCarousel from "@/app/eventCarousel";


export default function Upcoming() {
    return (
        <>
            <p className="text-4xl md:text-5xl lg:text-6xl pt-40 py-8 font-light text-center">Upcoming Events</p>
            <EventCarousel />
        </>
    );
}
