import React, { Component, useEffect, useState } from 'react';
import Navbar from "../component/navbar";

const Contact = () => {
	return (
		<div>
			<Navbar />
			<ContactContent />
		</div>
	)
}

function ContactContent () {

	return (
		<div className="contact">
			<div className="contact_title">
				<p>C　O　N　T　A　C　T</p>
			</div>
			<div className="contact_title2">
				<h1>Contact<br/>To Blanc</h1>
			</div>
			<div className="contact_img">
				<img src='./imgs/ent_contact_img1.jpg' />
			</div>
		</div>
	)
}


export default Contact;