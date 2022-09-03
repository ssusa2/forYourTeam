/** @format */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Project from './pages/Project/Project';
import Team from './pages/Team/Team';

function Router() {
	return (
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/team' element={<Team />} />
				<Route path='/project' element={<Project />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default Router;
