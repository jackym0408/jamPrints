import React from 'react';
import { CarouselItem } from '../components/Carousel';
import Carousel from '../components/Carousel';

// const header_width = {
//     width: `${100%}`
// }

function Homepage(){
    return(
        <>
            <Carousel> 
                <CarouselItem> <img className='hero1' src='./ecomPics/heroPage1.png'/> </CarouselItem>
                <CarouselItem> <img className='hero2' src='./ecomPics/saleHero.png'/>  </CarouselItem>
                <CarouselItem> <img className='hero3' src='./ecomPics/heroProduct.png'/>  </CarouselItem>
            </Carousel>
    
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