import Event from "@/app/event";

export default function Upcoming() {
    return (
        <>
            <span>Upcoming</span>
            <div className={"flex flex-row gap-12"}>
                <Event
                    name={'Bachelor Mondays'}
                    image={'./bachelor.jpg'}
                    description={'bachelor watch party'}
                    location={'@ the house'}
                    date={'every monday'}
                    time={'8-10p'}
                />
                <Event
                    name={'Valentine\'s Party w/ ASU'}
                    image={'./bachelor.jpg'}
                    description={'bachelor watch party'}
                    location={'@ the house'}
                    date={'2/15'}
                    time={'9p - 2a'}
                />
            </div>
        </>
    )
}