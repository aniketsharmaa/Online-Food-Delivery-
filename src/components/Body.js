import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import ResturantCard from "./ResturantCard";
import { resList } from "../utils/mockData";
import { swiggyApi } from "../utils/constant";
import axios from "axios";







const Body = () => {
    let listOfResturant = resList
    const [list, setList] = useState(listOfResturant)
    const fetchData = async () => {
        try {
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json = await data.json()
            console.log(json)
    
        } catch (error) {
            console.log('this is error',error)
        }


    }
    useEffect(() => {
        console.log("use effect is called: ")
        fetchData()


    }, [])


    return (

        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = list.filter((it) => it.data.avgRating > 4.3
                    );
                    setList([...filteredList]);
                    console.log("done")
                }}>
                    Top Rated
                </button>
            </div>
            <div className="Search"></div>
            <SearchBar />
            <div className="res-container">
                {
                    list.map(restaurant => <ResturantCard key={restaurant.data.id} resData={restaurant} />)
                }
            </div>
        </div>
    )
}
export default Body;  