import { useEffect, useState } from "react";
import api from "../services/api";
import EventCard from "../components/EventCard";


function Home() {
const [events, setEvents] = useState([]);


useEffect(() => {
api.get("/events").then(res => setEvents(res.data));
}, []);


return (
<div>
<h2>All Events</h2>
{events.map(e => (
<EventCard key={e._id} event={e} />
))}
</div>
);
}


export default Home;

