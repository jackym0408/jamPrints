import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <>
         <div className="container">
		<div className="contact-box">
				<h2>Contact</h2>
        <p> Feel free to contact me for any questions :) </p>

				<input type="text" className="field" placeholder= "Name"/>
				<input type="text" className="field" placeholder="Your Email"/>
				<input type="text" className="field" placeholder="Phone"/>
				<textarea placeholder="Message" className="field"></textarea>
				<button className="btn">Send</button>
		</div>
	</div>
      
      </>
    )
  }
}
