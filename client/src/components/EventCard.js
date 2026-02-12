function EventCard({ event }) {
return (
<div className="card">
<h3>{event.title}</h3>
<p>{event.description}</p>
<p>{event.date}</p>
<p>₹ {event.price}</p>
<button>Book</button>
</div>
);
}

export default EventCard;