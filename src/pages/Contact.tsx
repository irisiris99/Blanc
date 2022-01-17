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
			<div className="space_nav">

			</div>
			<div className="contact_title">
				<p>C　O　N　T　A　C　T</p>
			</div>
			<div className="contact_title2">
				<h1>Contact<br/>　To Blanc</h1>
			</div>
			<div className="contact_img">
				<img src='imgs/contact_img1.jpg' />
				<img src='imgs/contact_img2.jpg' />
			</div>
			<div className='contact_info'>
				<div>
					<a href="https://github.com/irisiris99/blanc">Github :　https://github.com/irisiris99/blanc</a>
				</div>
				<div>
					<p>Email :　cjg03117@gmail.com</p>
					<p>Phone :　010-6850-5607</p>
				</div>
			</div>
			<div className="contact_end">
				<p>©2022 January Project</p>
				<p>iris99 Make Protfolio Web Site</p>
				<p>Black and White Design XD</p>
			</div>
		</div>
	)
}


export default Contact;