import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../App.css";


const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    return (
        <div className="alert alert-secondary"
            style={{
                backgroundColor: "lightgreen",
                color: "white",
                display: "flex",
                alignItems: "center"
            }}>
            <span>Currency </span>
            <select className=".custom-currency-select"
                value={currency}
                style={{
                    appearance: "none",
                    border: "none",
                    backgroundColor: "lightgreen",
                    boxShadow: "none",
                    outline: "none",
                    size: 10,
                    color: "white",
                    width: "50 %",
                    marginLeft: "10px"
                }}
                onChange={(event) => dispatch({ type: 'CHG_CURRENCY', payload: event.target.value })}>
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Ruppee</option>
            </select>
        </div >
    );
};

export default Currency;