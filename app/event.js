import React from 'react'

export default function Event(props) {
    const name = props.name;
    const image = props.image;
    const description = props.description;
    const date = props.date;
    const time = props.time;
    const location = props.location;

    return (
        <div className={'flex flex-col px-10 py-8 bg-gray-700 rounded-xl grayscale'}>
            <img src={image}/>
            <div className={'pt-8 flex flex-col'}>
                <h1 className={'font-bold text-2xl'}>{name}</h1>
                <span>{description}</span>
                <span>{date}</span>
                <span>{time}</span>
                <span>{location}</span>
            </div>
        </div>
    )
}