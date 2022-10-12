/** @format */
import './index.scss';
import '../styles/globals.css';
import withRedux from 'next-redux-wrapper';
import { wrapper } from '../src/store/index';
import Nav from '../components/Nav/Nav.js';
import Footer from '../components/Footer/Footer.js';
import ScrollToTop from '../components/ScrollToTop';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Nav />
			<Component {...pageProps} />
			<ScrollToTop />
			<Footer />
		</>
	);
}

export default wrapper.withRedux(MyApp);
