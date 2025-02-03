import Leaderboard from './Leaderboard'
import Footer from "@/app/footer";

export default function Home() {
    return (
        <div className={"flex flex-col justify-center items-center"}>
            <img className={"h-auto w-screen"} src={'./initiation-pic.jpg'} alt="Background"
                 style={{
                     WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",
                     maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)"
                 }}/>
            <Leaderboard />
            <div className={"m-12"} >
                <a target={"_blank"}
                    href={"https://docs.google.com/forms/d/e/1FAIpQLSdycHGGl_wmdq-wueqfU2SdzJ0lJY7Nju3FRsfDW6QZsNET6g/viewform?usp=header"}>
                    <span className={'rounded-xl p-4 bg-[#222222] hover:bg-[#333333]'}>Pledge Point Submission Form</span>
                </a>
            </div>

            <Footer />
        </div>
    )
}