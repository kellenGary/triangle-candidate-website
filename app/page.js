"use client"
import Navbar from "@/app/navbar";
import {useState} from "react";
import Everyman from "@/app/everyman";
import Home from './home'
import Calendar from './calendar'

function PledgeTest() {
    return null;
}

function Contacts() {
    return null;
}

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
        ) : activePage === "calendar" ? (
            <Calendar />
        ) : (
            <></>
        )}


    </div>
    );
}
