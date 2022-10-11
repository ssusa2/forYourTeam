/** @format */
import './index.scss';
import '../styles/globals.css';
import withRedux from 'next-redux-wrapper';
import { wrapper } from '../src/store/index';
import Nav from '../components/Nav/Nav.js';
import Footer from '../components/Footer/Footer.js';
import classNames from 'classnames';
import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineClose } from 'react-icons/md';
import { HiLightningBolt } from 'react-icons/hi';

import styles from '../styles/globals.css';

const notify = () =>
	toast.custom(
		(t) => (
			<div
				className={classNames([
					styles.notificationWrapper,
					t.visible ? 'top-0' : '-top-96',
				])}
			>
				<div className={styles.iconWrapper}>
					<HiLightningBolt />
				</div>
				<div className={styles.contentWrapper}>
					<h1>New version available</h1>
					<p>
						An improved version of VESSEL is now available, refresh to update.
					</p>
				</div>
				<div className={styles.closeIcon} onClick={() => toast.dismiss(t.id)}>
					<MdOutlineClose />
				</div>
			</div>
		),
		{ id: 'unique-notification', position: 'top-center' }
	);

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Nav />
			<Component {...pageProps} />
			<div>
				<button onClick={notify}>Notify</button>
				<Toaster />
			</div>
			<Footer />
		</>
	);
}

export default wrapper.withRedux(MyApp);
