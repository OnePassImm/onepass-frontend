import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
	return (
		<section className="banner h-[70vh]">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 2500,
					disableOnInteraction: true,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="swiper h-full w-full">
				<SwiperSlide className="justify-center text-center items-center">
					<img
						src={"assets/programGroups/dinhcu.jpg"}
						alt={"dinhcu.jpg"}
						className="object-cover h-full w-full block"
					/>
				</SwiperSlide>
				<SwiperSlide className="justify-center text-center items-center">
					<img
						src={"assets/programGroups/duhoc.jpg"}
						alt={"duhoc.jpg"}
						className="object-cover h-full w-full block"
					/>
				</SwiperSlide>
				<SwiperSlide className="flex justify-center text-center items-center">
					<img
						src={"assets/programGroups/dulich.jpg"}
						alt={"dulich.jpg"}
						className="object-cover h-full w-full block"
					/>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Banner;
