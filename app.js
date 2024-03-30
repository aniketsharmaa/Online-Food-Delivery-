import React from "react";
import ReactDOM from "react-dom";





const NavbarContent = () => {
    return (
        <ul className="navbar-content">
            <li className="list-item">Search</li>
            <li className="list-item">Offers</li>
            <li className="list-item">Login</li>
            <li className="list-item">Cart</li>

        </ul>
    );
}
const Navbar = () => {
    return (
        <div className="navbar">

            <img src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1711475937~exp=1711476537~hmac=50c535ca77fd389904f7bd60dd04a1abf183971648512c52bc7553c31db59065" className="img-logo" />


            <NavbarContent />
            
            
        </div>
    );

}
const Line = () =>{
    return(
        <hr/>
    );
}
const SearchBar = () => {
    return (
        <div className="SearchBar">
            <label>
                
                <input placeholder="Enter food or resturant" type="text" id="fname" name="fname"/>

            </label>
            <button>SEARCH</button>
        </div>

    );
}
const Card = (props) =>{
    // const {name} = props
    return(
        <div className="card" >
            <img className="card-img" src="https://img.freepik.com/free-photo/spaghetti-with-shrimp_1339-1352.jpg?t=st=1711572138~exp=1711575738~hmac=159dce724688b3ce01e14bacdb948ef0adf3f72e3917b3d203621ce1c4e953ab&w=996"/>
            <br/>
            <br/>
            <hr/>
            <br/>   
            <h4>{props.name}</h4>
            <h5>{props.cusins}</h5>
            <h5>{props.rating}</h5>
            <h5>{props.dot}</h5>
        </div>
    );
}
const CardContainer = () =>{
    return(
        <div className="card-container">
            <Card name="Burger King" rating="4.3"cusins="Western" dot="20 minutes"/>
            <Card name="KFC" rating="4.3"cusins="Western"dot="39 minutes"/>
            <Card name="Domios" rating="4.2"cusins="Chinese"dot="40 minutes"/>
            <Card name="Murgan Dosa" rating="4.3"cusins="South India"dot="3 minutes"/>
            <Card name="Rameshwaram Cafe" rating="3.4"cusins="Southern India"dot="4 minutes"/>
            <Card name="Kathi Rolls" rating="3.4"cusins="Southern India"dot="4 minutes"/>

        </div>
    );
}
const App = () => {
    return (
        <div>

            {/* Navbar  */}
            <Navbar />

            {/* line  */}
            {/* <Line/> */}
            {/* Search  */}
            <SearchBar />

            {/* Dishes-container */}
            <CardContainer/>
            {/* card-container */}

            {/* footer */}

        </div>

    );
}

ReactDOM.render(<App />, document.getElementById("root"));