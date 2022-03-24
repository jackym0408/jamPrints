import React from 'react'; 
import berryLogo from 

function nav(){
    return(
        <>
            <nav className="navbar">
                    <img src={berryLogo} alt="strawberry logo"/>
                    <ul>
                        <li> <a href="index.html">Home</a> </li>
                        <li> <a href="product.html">Products</a> </li>
                        <li> <a href="contact.html">Contact Us</a> </li>
                    </ul>
                </nav>
        </>
    );
}

export default nav;





