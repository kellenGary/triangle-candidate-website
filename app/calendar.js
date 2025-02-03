import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'

export default function Calendar() {
    return (
        <div className={"p-20 pb-12 mx-12"}>
            <FullCalendar
                plugins={[
                    resourceTimelinePlugin,
                    dayGridPlugin,
                    interactionPlugin,
                    timeGridPlugin
                ]}
                headerToolbar={{
                    left: 'prev,next',
                    center: 'title',
                    right: ''
                }}
                initialView='dayGridMonth'
                nowIndicator={true}
                editable={true}
                selectable={true}
                selectMirror={true}
                googleCalendarApiKey="9538b5f05692fe4ef48716ed41101309232e90c8"
                events={{
                    googleCalendarId: "0?cid=ZHRvODFocnFhdG1zdTc0Z2l2b282bmFjMHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ",
                }}
            />
        </div>
    )
}