import React from "react";
import ReactDOM from "react-dom";

// start from 30 make body comp 
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://img.freepik.com/free-vector/hand-drawn-pizza-delivery-man-with-scooter_23-2147674445.jpg?w=740&t=st=1711838469~exp=1711839069~hmac=af757b5f613a8359343c5391dedb1c601c39cece510dcaaf1f201bc4dc9f97ae" />
      </div>

      <div className="nav-items">
        <ul className="items">
          <li>Home</li>
          <li>About Us</li>
          <li>Login</li>
          <li>Cart</li>
        </ul>

      </div>
    </div>
  );
}
const SearchBar = () => {
  return (
    <div className="search-bar">
      <input placeholder="Enter Food or Resturent" />
      <button>Search</button>

    </div>
  );
}
const ResturantCard = () => {
  return (
    <div className="res-card">
      <h3>Meghna Food</h3>

    </div>
  );
}
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <SearchBar />
      <div className="res-container">
        // resturant card
        <ResturantCard />

      </div>
    </div>
  )
}
const Applayout = () => {
  return (
    <div className="app">

      <Header />

    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />)