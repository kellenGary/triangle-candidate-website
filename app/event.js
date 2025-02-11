import React from 'react'

export default function Event(props) {
    const { name, image, date, time, location, focused } = props;

    return (
        <div className={`flex w-[16rem] md:max-w-[20rem] h-fit md:max-h-[28rem] flex-col p-4 bg-[#525252] rounded-xl 
            overflow-auto drop-shadow-[0_0px_4px_rgba(255,255,255,0.1)] 
            transform transition-transform duration-200 ${focused ? 'scale-105' : 'scale-100'}`}>
            <img className="max-h-[15rem] w-auto" src={image} alt={name} />
            <div className="pt-2 flex flex-col">
                <h1 className="font-bold md:text-xl lg:text-2xl">{name}</h1>
                <span className={"text-sm md:text-lg"}>🗓 {date}</span>
                <span className={"text-sm md:text-lg"}>🕰 {time}</span>
                <span className={"text-sm md:text-lg"}>📍 {location}</span>
            </div>
        </div>
    )
}
