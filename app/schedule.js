import Leaderboard from "@/app/Leaderboard";
import Footer from "@/app/footer";
import WeekByWeek from "@/app/weekByWeek";


export default function Schedule() {
    return (
        <div className={"flex flex-col justify-center items-center pt-4 md:pt-16"}>
            <img src={"./PinHeader.png"} className={'scale-125 h-auto w-full'}
                 style={{
                     WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)",
                     maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 1) 80%, rgba(0, 0, 0, 0) 100%)"
                 }}
            />
            <WeekByWeek/>
            <Leaderboard />
            <Footer/>
        </div>
    )
}