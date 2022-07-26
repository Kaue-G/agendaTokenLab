import React, { useEffect, useState } from "react";
import SideBar from "../../components/SideBar";
import { api } from "../../services/api";

export function Events() {
    const [listEvents, setListEvents ] = useState([]);

    useEffect(() => {
        api
            .get('/events')
            .then(response => {
                setListEvents(response.data);
                console.log(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    console.log(listEvents);
    return (
        <>
            <SideBar />
            <div>
                {listEvents.map(event => (
                    <div>
                        <h1>{event.description}</h1>
                    </div>
                ))}
            </div>
        </>
    );
};
