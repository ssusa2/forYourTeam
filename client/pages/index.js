/** @format */
import Link from 'next/Link';
import fetcher from '../fetcher';
import MsgList from './MsgList';

const Home = ({ smsgs }) => (
	<>
		<h1>
			<a href='/'>Home</a>
		</h1>
		<a href='/?userId=jay'>jay</a>
		<a href='/?userId=roy'>roy</a>
		<MsgList smsgs={smsgs} />
		<Link href='/home/home'>a</Link>
	</>
);

export const getServerSideProps = async () => {
	const smsgs = await fetcher('get', '/messages');
	return {
		props: { smsgs },
	};
};

export default Home;
