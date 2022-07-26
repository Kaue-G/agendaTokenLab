import React from "react";
import { Link } from "react-router-dom";
import { AreaEventsBar } from './style';

function EventsBar(){
    return (
        <AreaEventsBar>
                <div>
                    <Link to='/events'>Events</Link>
                </div>
        </AreaEventsBar>
    );
}

export default EventsBar;
