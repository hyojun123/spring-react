import React from 'react';
import Header from './Header/Header';
import Hello from './Hello/Hello';
import Skill from './Skill/Skill';
import Top from './topButton/Top';

import Achievement from './Achievement/Achievement';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Experience from './Experience/Experience';
import Project from './Project/Project';
import {achievements, blogs, contactInfo, experience, greeting, projects, skills} from '../portfolio';

function Main() {
	return (
		<>
			<Header />
			{greeting.view && <Hello />}
			{skills.view && <Skill />}
			{experience.view && <Experience />}
			{projects.view && <Project />}
			{achievements.view && <Achievement />}
			{blogs.view && <Blog />}
			{contactInfo.view && <Contact />}
			<Footer />
			<Top />
		</>
	);
}
export default Main;