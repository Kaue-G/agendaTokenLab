import React from "react";
import { Link } from "react-router-dom";
import { AreaUserBar } from './style';

function UserBar(){
    return (
        <AreaUserBar>
            <div>
                <Link to='/user'>User</Link>
            </div>
        </AreaUserBar>
    );
}

export default UserBar;
