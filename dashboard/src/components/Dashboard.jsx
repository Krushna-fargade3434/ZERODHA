import React from "react";
import { Routes, Route } from "react-router-dom";

import Funds from "./Funds.jsx";
import Apps from "./Apps.jsx";
import Holdings from "./Holdings.jsx";
import Orders from "./Orders.jsx";
import Positions from "./Positions.jsx";
import Summary from "./Summary.jsx";
import WatchList from "./WatchList.jsx";
import Account from "./Account.jsx";

import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <GeneralContextProvider>
                <WatchList />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Summary />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/holdings" element={<Holdings />} />
                        <Route path="/positions" element={<Positions />} />
                        <Route path="/funds" element={<Funds />} />
                        <Route path="/apps" element={<Apps />} />
                        <Route path="/account" element={<Account />} />
                    </Routes>
                </div>
            </GeneralContextProvider>
        </div>
    );
};

export default Dashboard;
