/** @format */
import './index.scss';
import '../styles/globals.css';
import withRedux from 'next-redux-wrapper';
import { wrapper } from '../src/store/index';
import Nav from '../components/Nav/Nav.js';
import Footer from '../components/Footer/Footer.js';
import firebase from './firebase';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Nav />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default wrapper.withRedux(MyApp);
