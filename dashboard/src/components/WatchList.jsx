import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import {Tooltip , Grow } from "@mui/material"
import {watchlist} from "../data/data";
import { BarChartOutlined, KeyboardArrowDown , KeyboardArrowUp, MoreHoriz } from "@mui/icons-material";
import GeneralContext from "./GeneralContext";
import { DoughnetChart } from "./DoughnetChart.jsx";
import { API_URL } from "../config";

const WatchList = () => {
    const [items, setItems] = useState(watchlist);
    const [symbol, setSymbol] = useState("");
    const [error, setError] = useState("");
    useEffect(() => {
        axios.get(`${API_URL}/watchlist`, { withCredentials: true })
            .then(({ data }) => setItems(data.length ? data : watchlist))
            .catch(() => setError("Unable to load watchlist"));
    }, []);
    const addStock = async (event) => {
        event.preventDefault();
        const item = watchlist.find((stock) => stock.name === symbol.trim().toUpperCase());
        if (!item) return setError("Choose a supported stock symbol");
        if (items.some((stock) => stock.name === item.name)) {
            return setError("Stock is already in your watchlist");
        }
        try {
            const { data } = await axios.post(`${API_URL}/watchlist`, item, { withCredentials: true });
            setItems((current) => [...current, data]);
            setSymbol("");
            setError("");
        } catch (requestError) {
            setError(requestError.response?.data?.message || "Unable to add stock");
        }
    };
    const removeStock = async (name) => {
        try {
            await axios.delete(`${API_URL}/watchlist/${name}`, { withCredentials: true });
            setItems((current) => current.filter((stock) => stock.name !== name));
        } catch (requestError) {
            setError(requestError.response?.data?.message || "Unable to remove stock");
        }
    };
    const data = {
        labels: items.map((stock) => stock.name),
        datasets:[
            {
            label:"Price",
            data: items.map((stock) => stock.price),
            backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
            'rgba(75, 192, 192, 0.5)',
            'rgba(153, 102, 255, 0.5)',
            'rgba(255, 159, 64, 0.5)',
            ],
            borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            }
        ]
    }
    return (
        <div className="watchlist-container">
            <div className="search-container">
                <input
                    type="text"
                    name="search"
                    placeholder="Search eg:infy , bse , nifty"
                    className="search"
                />
                <span className="counts">{items.length} / 50</span>
            </div>
            <form onSubmit={addStock} className="search-container">
                <input value={symbol} onChange={(event) => setSymbol(event.target.value)}
                    placeholder="Add symbol (e.g. INFY)" className="search" />
                <button type="submit">Add</button>
            </form>
            {error && <p className="error">{error}</p>}

            <ul className="list">
                {items.map((stock , index) =>{
                    return (
                        <WatchListItem stock={stock} key={index} onRemove={removeStock} />
                    ) 
                })}
            </ul>
            <DoughnetChart data={data}/>
        </div>
    );
};

export default WatchList;

const WatchListItem = ({stock, onRemove}) =>{
    const [showWatchlistActions , setShoWatchlistActions ] = useState(false);

    const handleMouseEnter = (e) =>{
        setShoWatchlistActions(true);
    }

    const handleMouseLeave = (e) =>{
        setShoWatchlistActions(false);
    }

    return(
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up" }>{stock.name}</p>
                <div className="itemInfo">
                    <span className="percent">{stock.percent}</span>
                    {stock.isDown ? (
                        <KeyboardArrowDown className="down"/>
                    ) : (
                        <KeyboardArrowUp className="down"/>
                    )}
                    <span className="price">{stock.price}</span>
                </div>
            </div>
            {showWatchlistActions && <WatchListActions uid={stock.name} onRemove={onRemove}/>}
        </li>
    );
};

const WatchListActions = ({uid, onRemove}) =>{
    const ctx = useContext(GeneralContext);

    return (
        <span className="actions">
            <span>
                <Tooltip
                    title = "Buy (B)" placement="top" arrow TransitionComponent={Grow}
                    >
                    <button className="buy" onClick={() => ctx.openBuyWindow(uid)}>Buy</button>
                </Tooltip>
                <button className="action" onClick={() => onRemove(uid)} aria-label={`Remove ${uid}`}>
                    Remove
                </button>
                <Tooltip
                    title = "Sell (S)" placement="top" arrow TransitionComponent={Grow}
                    >
                    <button className="sell">Sell</button>
                </Tooltip>
                <Tooltip
                    title = "Analytics (A)" placement="top" arrow TransitionComponent={Grow}
                    >
                    <button className="action">
                        <BarChartOutlined className="icon"/>
                    </button>
                </Tooltip>
                <Tooltip
                    title = "More (M)" placement="top" arrow TransitionComponent={Grow}
                    >
                    <button className="action">
                        <MoreHoriz className="icon"/>
                    </button>
                </Tooltip>
                
            </span>
        </span>
    )
}