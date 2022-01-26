import React, { Component, useEffect, useState } from 'react';
import Navbar from "../component/navbar";
import AnimatedPage from '../component/AnimatedPage';
import { useSelector } from 'react-redux';

const Contact = () => {
	return (
		<AnimatedPage>
			<div>
				<Navbar />
				<ContactContent />
			</div>
		</AnimatedPage>
	)
}

function ContactContent () {
	const Phone = useSelector( (state) => state[0]);
	const Email = useSelector( (state) => state[1]);
	const Github = useSelector( (state) => state[2]);

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
				<img src='https://irisiris99.github.io/blanc/imgs/contact_img1.jpg' />
				<img src='https://irisiris99.github.io/blanc/imgs/contact_img2.jpg' />
			</div>
			<div className='contact_info'>
				<div>
					<a href='https://github.com/irisiris99/blanc'>Github :　{Github}</a>
				</div>
				<div>
					<p>Email :　{Email}</p>
					<p>Phone :　{Phone}</p>
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