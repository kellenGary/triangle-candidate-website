import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import timeGridPlugin from '@fullcalendar/timegrid'

export default function Calendar() {
    return (
        <div className={"p-20 pb-12"}>
            <FullCalendar
                plugins={[
                    resourceTimelinePlugin,
                    dayGridPlugin,
                    interactionPlugin,
                    timeGridPlugin
                ]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth'
                }}
                initialView='resourceTimelineWeek'
                nowIndicator={true}
                editable={true}
                selectable={true}
                selectMirror={true}
                initialEvents={[
                    { title: 'nice event', start: new Date(), resourceId: 'a' }
                ]}
            />
        </div>
    )
}