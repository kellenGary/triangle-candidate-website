"use client"
import Navbar from "@/app/navbar";
import {useState} from "react";
import Everyman from "@/app/everyman";
import Home from './home'
import Schedule from "@/app/schedule";
import PledgeTest from "@/app/pledgeTest";

export default function Page() {
    const [activePage, setActivePage] = useState('home')

    return (
    <div className={"h-fit min-h-screen w-auto bg-[#171717] justify-center"}>
        <Navbar activePage={activePage} setActivePage={setActivePage}/>
        {activePage === "home" ? (
            <Home />
        ) : activePage === "everyman" ? (
            <Everyman />
        ) : activePage === "pledge-test" ? (
            <PledgeTest />
        ) : activePage === "schedule" ? (
            <Schedule />
        ) : (
            <></>
        )}


    </div>
    );
}
