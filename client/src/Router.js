/** @format */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Intro from './pages/Intro/Intro';
import Projects from './pages/Projects/Projects';
import Project from './pages/Projects/Project';
import Team from './pages/Team/Team';
import Home from './pages/Home/Home';
import ScrollToTop from './util/ScrollTop';

function Router() {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Nav />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/team' element={<Team />} />
				<Route path='/intro/:id' element={<Intro />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/project/:id' element={<Project />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default Router;
