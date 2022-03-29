import React, { Component } from 'react'
import contactImg from './profselfp.png'

const imgstyle = {
    backgroundImage: `url(${contactImg})`

}

export default class Contact extends Component {
  render() {
    return (
      <>
         <div className="container">
		<div className="contact-box">
			<div className="left" style={imgstyle}></div>
			<div className="right">
				<h2>Contact Us</h2>
        <p> Feel free to contact me for any questions :) </p>

				<input type="text" className="field" placeholder="Your Name"/>
				<input type="text" className="field" placeholder="Your Email"/>
				<input type="text" className="field" placeholder="Phone"/>
				<textarea placeholder="Message" className="field"></textarea>
				<button className="btn">Send</button>
			</div>
		</div>
	</div>
      
      </>
    )
  }
}
