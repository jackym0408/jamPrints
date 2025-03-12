import React, { Component } from 'react';
// import axios from 'axios'

// export default class Products extends Component {
//   state = {
//     originalProductData: [],
//     productData: [],
//     type: "Reset",
//   };

//   async componentDidMount() {
//     await axios.get("/api/products").then((res) => {
//       //when deploying change url to '/api/Products'
//       this.setState({ productData: res.data, originalProductData: res.data });
//       //if heroku dies type 'heroku restart' in terminal
//     });
//   }
//   jamfilter(type){
//     return() => {
//       this.setState({type})
//     }
//   };

//   render() {
//     return (
//       <>
//       <div className='filtercontain'>
//       <button className='filterbutton' onClick={this.jamfilter(100)}>
//         {'more than $100'}
//       </button>

//       <button className='filterbutton' onClick={this.jamfilter(80)}>
//         {'less than $80'}
//       </button>

//       <button className='filterbutton' onClick={this.jamfilter('cartoons')}>
//         {'cartoons'}
//       </button>

//       <button className='filterbutton' onClick={this.jamfilter('anime')}>
//         {'anime'}
//       </button>

//       <button className='filterbutton' onClick={this.jamfilter('original')}>
//         {'originals'}
//       </button>
//       </div>

      
//         <div className="productsContainer">
//         {
//           //.map
//           this.state.productData
//           .filter((card) => {
//             if (this.state.type === "Reset") {
//               return true;
//             } else if (this.state.type === 100) {
//               return this.state.type <= card.price;
//             } else if (Number.isInteger(this.state.type)) {
//               return this.state.type > card.price;
//             } else {
//               return this.state.type === card.genre;
//             }
//           })
//           .map((card) => {
//             return(
//               <div className="productImages">
//                 <img src={card.image} alt={card.product_name} width="300" height="auto"/>
//                 <p>{card.product_name}</p>
//                 <p>{card.desc_product}</p>
//                 <h5>${card.price}</h5>
//               </div>
//             )
//           })
//         }

// </div>
//       </>
//     )
//   }
// }

export default class Contact extends Component {
  render(){
    return(
      <>
        <h1 className='prodHeader'>Products</h1>

        <section className='products'>
          <div className='prodContainer'>
            <img className='proImg' src="./ecomPics/gromFinal.png " alt="two girl dancing"/>
            <img className='proImg' src="./ecomPics/puppycat.jpg" alt=""/>
            <img className='proImg' src="./ecomPics/oceanFinal.png" alt=""/>
            <img className='proImg' src="./ecomPics/bmoDone.png" alt=""/>
            <img className='proImg' src="./ecomPics/pinkArt2.jpg" alt="pink fashion"/>
            <img className='proImg' src="./ecomPics/slowdancing2.jpg " alt="two girl dancing again" />
          </div>
            
        </section>
      </>
    )
  }
}
