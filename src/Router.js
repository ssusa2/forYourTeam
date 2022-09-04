/** @format */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Project from './pages/Project/Project';
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
				<Route path='/project' element={<Project />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default Router;
