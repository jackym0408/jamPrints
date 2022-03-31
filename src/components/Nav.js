import React from 'react'; 

import {Link} from 'react-router-dom';

function nav(){
    return(
        <>
            <nav className="navbar">
                    <img className='navlogo' src='./ecomPics/berryLogo.png' alt="strawberry logo"/>
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/product">Products</Link> </li>
                        <li> <Link to="/contact">Contact Us</Link> </li>
                    </ul>
                </nav>
        </>
    );
}

export default nav;





