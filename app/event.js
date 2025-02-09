import React from 'react'

export default function Event(props) {
    const { name, image, date, time, location, focused } = props;

    return (
        <div className={`flex max-w-[20rem] h-fit max-h-[28rem] flex-col p-4 bg-[#525252] rounded-xl 
            overflow-auto drop-shadow-[0_0px_10px_rgba(255,255,255,0.1)] 
            transform transition-transform duration-200 ${focused ? 'scale-105' : 'scale-100'}`}>
            <img className="max-h-[15rem] w-auto" src={image} alt={name} />
            <div className="pt-2 flex flex-col">
                <h1 className="font-bold text-2xl">{name}</h1>
                <span>🗓 {date}</span>
                <span>🕰 {time}</span>
                <span>📍 {location}</span>
            </div>
        </div>
    )
}
