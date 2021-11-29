
const Ticket = ({ ticket }) => {

return (
    <div className="container">
        <h2>Ticket</h2>
        <ul className="responsive-table">
            <li className="table-header">
            <div className="col col-1">Travel Class</div>
            <div className="col col-2">Passenger type</div>
            <div className="col col-3">Boarding stop</div>
            <div className="col col-4">Destination stop</div>
            </li>
            <li className="table-row">
            <div className="col col-1" data-label="travel_class">{ticket.travel_class}</div>
            <div className="col col-2" data-label="passenger_type">{ticket.passenger_type}</div>
            <div className="col col-3" data-label="boarding_stop">{ticket.boarding_stop}</div>
            <div className="col col-4" data-label="destination_stop">{ticket.destination_stop}</div>
            </li>
         </ul>
    </div>

    );
}

export default Ticket;
