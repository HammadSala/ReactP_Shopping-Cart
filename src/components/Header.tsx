import React from "react";


type Props = {
    countCartitems :  number
}
const Header = (countCartitems : Props) => {

    return (
        <header className="block row center">
            <div>
                <a href="#/">
                Shopping Cart 
                </a>
            </div>
            <div >
                <a href="#/cart">
                    Cart{ ' '}
                     { countCartitems.countCartitems ? ( <button className="badge">{countCartitems.countCartitems}</button>) : " " }
                </a>
                <a href="#/signin">
                    Login
                </a>
            </div>
        </header>
        
    );
    
}

export default Header;