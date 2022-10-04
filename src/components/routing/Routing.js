import React from 'react';
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import LandingPage from "../layouts/LandingPage";
import NotFound from "../layouts/NotFound";
import Dashboard from "../Dashboard/Dashboard";
import Programme from "../Programme/Programme";
import Centre from "../Centre/Centre";

import ChatRoom from "../Chatroom/Chatroom";

const Routing = () => {
    return (
        <section>
            <Routes>
                <Route exact path={"/"} element={<LandingPage/>} />

                <Route exact path={"/home"} element={
                    <PrivateRoute>
                        <Dashboard/>
                    </PrivateRoute>
                } />
                <Route exact path={"/programme"} element={
                    <PrivateRoute>
                        <Programme/>
                    </PrivateRoute>
                } />
                <Route exact path={"/chat-room"} element={
                    <PrivateRoute>
                        <ChatRoom/>
                    </PrivateRoute>
                } />
                <Route exact path={"/centre"} element={
                    <PrivateRoute>
                        <Centre/>
                    </PrivateRoute>
                } />


                <Route exact path='/*' element={<NotFound/>}/>
            </Routes>
        </section>
    );
};

export default Routing;