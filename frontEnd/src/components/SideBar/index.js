import React from "react";
import EventsBar from "../EventsBar";
import UserBar from "../UserBar";
import { AreaSideBar } from './styled';

function SideBar(){
    return (
        <AreaSideBar>
            <EventsBar />
            <UserBar />
        </AreaSideBar>
    );
}

export default SideBar;
