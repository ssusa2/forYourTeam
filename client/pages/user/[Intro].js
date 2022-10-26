/** @format */

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

function user({ PreviewTeamInfo }) {
	return (
		<>
			<div className='my-container max-w-6xl'>
				<div className='middle-title'>~~님이 참여한 프로젝트</div>
			</div>
		</>
	);
}

export default user;
