import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ResturantCard from "./ResturantCard";
import { resList } from "../utils/mockData";

var apiUrl = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5940947&lng=85.1375645&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"

async function fetchData(){
    var data = fetch(apiUrl);
    data = (await data).json
    console.log(data)
}
fetchData();


const Body = () => {
    let listOfResturant = resList
    const [list, setList] = useState(listOfResturant)

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