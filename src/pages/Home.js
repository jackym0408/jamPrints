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
                <CarouselItem> <img className='hero1' alt="page1" src='./ecomPics/heroPage1.png'/> </CarouselItem>
                <CarouselItem> <img className='hero2' alt="sale page" src='./ecomPics/saleHero.png'/>  </CarouselItem>
                <CarouselItem> <img className='hero3' alt="mockup" src='./ecomPics/heroProduct.png'/>  </CarouselItem>
            </Carousel>
    
            <div className="textHeader">
                <center>
                    <h1> Best sellers </h1>
                </center>
            </div>
        
            <section className="products">
            <div className='prodContainer'> 
                <img className="proImg" src="./ecomPics/gromFinal.png " alt="two girl dancing" />
                <img className="proImg" src="./ecomPics/pinkArt2.jpg" alt="pink fashion" id="middleimg"/>
                <img className="proImg" src="./ecomPics/slowdancing2.jpg " alt="two girl dancing again" />
            </div>
            </section>
        
        </>
    );
}

export default Homepage;