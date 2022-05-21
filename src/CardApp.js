import React from "react";
import CardList from "./CardList";
import { robots } from "./robots";


const CardApp = ({ robots }) => {
    return (

        <CardList robots={robots} />
    );
}




export default CardApp;