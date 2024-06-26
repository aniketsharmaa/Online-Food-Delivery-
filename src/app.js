import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/Header"
import Body from "./components/Body";


// data from swiggy api 



//   type: "restaurant",
//   data: {
//     type: "F",
//     id: "74453",
//     name: "Domino's Pizza",
//     uuid: "87727dbd-7f2b-4857-9763-359624165845",
//     city: "21",
//     area: "Athwa",
//     totalRatingsString: "1000+ ratings",
//     cloudinaryImageId: "bz9zkh2aqywjhpankb07",
//     cuisines: ["Pizzas","Fries","Garlic Bread"],
//     tags: [],
//     costForTwo: 40000,
//     costForTwoString: "₹400 FOR TWO",
//     deliveryTime: 45,
//     minDeliveryTime: 45,
//     maxDeliveryTime: 45,
//     slaString: "45 MINS",
//     lastMileTravel: 0,
//     slugs: {
//       restaurant: "dominos-pizza-majura-nondh-test_surat",
//       city: "surat",
//     },
//     cityState: "21",
//     address:
//       "Shop 32 To 35, Sheetal Shopping Square,Near Lb Turning Point, Bhatar Road,MAJURA NONDH, Surat,GUJARAT-395001",
//     locality: "Bhatar Road",
//     parentId: 2456,
//     unserviceable: false,
//     veg: true,
//     select: false,
//     favorite: false,
//     tradeCampaignHeaders: [],
//     aggregatedDiscountInfo: {
//       header: "FREE DELIVERY",
//       shortDescriptionList: [
//         {
//           meta: "FREE DELIVERY",
//           discountType: "FREE_DELIVERY",
//           operationType: "RESTAURANT",
//         },
//       ],
//       descriptionList: [
//         {
//           meta: "FREE DELIVERY",
//           discountType: "FREE_DELIVERY",
//           operationType: "RESTAURANT",
//         },
//       ],
//       subHeader: "",
//       headerType: 0,
//       superFreedel: "",
//     },
//     aggregatedDiscountInfoV2: {
//       header: "",
//       shortDescriptionList: [
//         {
//           meta: "Free Delivery",
//           discountType: "FREE_DELIVERY",
//           operationType: "RESTAURANT",
//         },
//       ],
//       descriptionList: [
//         {
//           meta: "FREE DELIVERY",
//           discountType: "FREE_DELIVERY",
//           operationType: "RESTAURANT",
//         },
//       ],
//       subHeader: "",
//       headerType: 0,
//       superFreedel: "",
//     },
//     chain: [],
//     feeDetails: {
//       fees: [],
//       totalFees: 0,
//       message: "",
//       title: "",
//       amount: "",
//       icon: "",
//     },
//     availability: {
//       opened: true,
//       nextOpenMessage: "",
//       nextCloseMessage: "",
//     },
//     longDistanceEnabled: 0,
//     rainMode: "NONE",
//     thirdPartyAddress: false,
//     thirdPartyVendor: "",
//     adTrackingID: "",
//     badges: {
//       imageBased: [],
//       textBased: [],
//       textExtendedBadges: [],
//     },
//     lastMileTravelString: "2.1 kms",
//     hasSurge: false,
//     sla: {
//       restaurantId: "74453",
//       deliveryTime: 45,
//       minDeliveryTime: 45,
//       maxDeliveryTime: 45,
//       lastMileTravel: 0,
//       lastMileDistance: 0,
//       serviceability: "SERVICEABLE",
//       rainMode: "NONE",
//       longDistance: "NOT_LONG_DISTANCE",
//       preferentialService: false,
//       iconType: "EMPTY",
//     },
//     promoted: false,
//     avgRating: "4.0",
//     totalRatings: 1000,
//     new: false,
//   },
//   subtype: "basic",
// }
// start from 30 make body comp 



const Applayout = () => {
  return (
    <div className="app">

      <Header />
      <Body />
    </div>
  );
}


// export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />)