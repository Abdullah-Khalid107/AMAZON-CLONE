import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import {useStateValue} from './StateProvider';

function Header() {

    const [{basket},dispatch]=useStateValue();
    console.log(basket);
    return (
        <nav className="header">
            {/* logo on the left side */}

            <Link to="/">
                <img className="header__logo" src="https://logodownload.org/wp-content/uploads/2016/10/olx-logo-13.png" />
            </Link>

            {/* SEARCH BOX */}
            <div className="header__search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            {/* 3 LINKS */}


                   {/* MAIN LINKS PART STARTS */}
            <div className="header__nav">

                {/* IST LINK */}
                <Link to="/Login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Hello boi</span>
                        <span className="header__optionLineTwo">Sign In</span>
                    </div>
                </Link>
            </div>

            {/* 2nd LINK */}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">Orders</span>
                </div>
            </Link>


            {/* 3RD LINK */}
            <Link to="/" className="header__link">
                <div className="header__option">
                    <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Prime</span>
                </div>
            </Link>

            {/* BASKET ICON WITH NUMBER */}
            <Link to="/Checkout" className="header__link">
            <div className="header__optionBasket">
                 {/* BASKET ICON SHOPPING */}
                 <ShoppingBasketIcon/>
                 {/* NUMBER OF ITEMS */}
                 <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
            </div>
            </Link>
        </nav>
    )
}

export default Header;
