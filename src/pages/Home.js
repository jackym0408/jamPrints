import React from 'react';

// const header_width = {
//     width: `${100%}`
// }

function Homepage(){
    return(
        <>
            <header className='header_container'>
                <img className="header" src="./ecomPics/heroFinal.png" alt=" header image"/>
            </header>
    
            <div className="textHeader">
                <center>
                    <h1> Best sellers </h1>
                </center>
            </div>
        
            <section className="featured">
                <img className="featImg" src="./ecomPics/gromFinal.png " alt="two girl dancing" />
                <img className="featImg" src="./ecomPics/pinkArt2.jpg" alt="pink fashion" id="middleimg"/>
                <img className="featImg" src="./ecomPics/slowdancing2.jpg " alt="two girl dancing again" />
            </section>
        
        </>
    );
}

export default Homepage;