import Leaderboard from './Leaderboard'
import Footer from "@/app/footer";
import Upcoming from "@/app/upcoming";
import InfoSection from "@/app/infoSection";
import MemberStats from "@/app/memberStats";

export default function Home() {
    return (
        <div className={"flex flex-col justify-center items-center"}>
            {/*<div className={'grid grid-cols-2'}>*/}
            {/*    <div className="flex flex-col w-[50vw] pt-10">*/}
            {/*        <h1 className="text-[18rem] w-full flex-grow h-[16rem]">BUILD</h1>*/}
            {/*        <h1 className="text-[13.1rem] w-full pl-2 flex-grow h-[7.5rem]">BETTER</h1>*/}
            {/*        <h1 className="text-[21.5rem] w-full flex-grow">MEN.</h1>*/}
            {/*    </div>*/}
            {/*    <img className={"h-full w-auto object-cover"}*/}
            {/*         style={{*/}
            {/*             WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)",*/}
            {/*             maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)"*/}
            {/*         }}*/}
            {/*         src={'./initiation-pic.jpg'} alt="Background"*/}
            {/*    />*/}
            {/*</div>*/}

            <img className={"h-full w-auto object-cover"} src={'./header2.png'} alt="Background"/>
            <InfoSection />
            <MemberStats />
            <Upcoming />


            <Footer />
        </div>
    )
}