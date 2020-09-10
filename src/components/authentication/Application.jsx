import React, { useContext } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import ProfilePage from "./ProfilePage";
import { UserContext } from "../../providers/UserProvider.jsx";
import Login from "pages/Login";
function Application() {
    const user = useContext(UserContext);
    return (
        user ?
            <ProfilePage />
            :
            <Router>
                <Login />
            </Router>

    );
}

export default Application;