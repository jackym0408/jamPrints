import React, { Component } from 'react'
import axios from 'axios'

export default class Products extends Component {
  state = {
    originalProductData: [],
    productData: [],
    type: "Reset",

  };

  async componentDidMount() {
    await axios.get("/api/products").then((res) => {
      //when deploying change url to '/api/Products'
      this.setState({ productData: res.data, originalProductData: res.data });
      //if heroku dies type 'heroku restart' in terminal
    });
  }
  render() {
    return (
      <>
        <div className="productsContainer">
        {
          this.state.productData.map((card) => {
            return(
              <div className="productImages">
                <img src={card.image} alt={card.product_name} width="300" height="auto"/>
                <p>{card.product_name}</p>
                <p>{card.desc_product}</p>
                <h5>${card.price}</h5>
              </div>
            )
          })
        }

</div>
      </>
    )
  }
}
