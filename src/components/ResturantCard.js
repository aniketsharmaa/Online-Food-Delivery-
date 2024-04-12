import React, { useState } from "react";
import { resList } from "../utils/mockData";
import { Res_card_img } from "../utils/constant";



const ResturantCard = (props) => {

    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.data;
    return (
        <div className="res-card">
            <img alt="image load ni hua" className="res-logo" src={Res_card_img + resData.data.cloudinaryImageId} />

            <h3>{name}</h3>
            <h6>{cuisines.join(", ")}</h6>
            <h6>Rating {avgRating}</h6>
            <h6>{costForTwo / 100}</h6>

        </div>
    );
}

export default ResturantCard 