import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
	return (
		<section className="banner aspect-[427/240]">
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
					<Link href="">
						<Image
							src="/assets/slide-banner/slide-1.jpg"
							alt="slide-1.jpg"
							className="object-contain h-full w-full block bg-lightBlue"
							fill
						/>
					</Link>
				</SwiperSlide>
				<SwiperSlide className="justify-center text-center items-center">
					<Image
						src="/assets/slide-banner/slide-2.jpg"
						alt="slide-2.jpg"
						className="object-contain h-full w-full block bg-lightBlue"
						fill
					/>
				</SwiperSlide>
				<SwiperSlide className="flex justify-center text-center items-center">
					<Image
						src="/assets/slide-banner/slide-3.jpg"
						alt="slide-3.jpg"
						className="object-contain h-full w-full block bg-lightBlue"
						fill
					/>
				</SwiperSlide>
				<SwiperSlide className="flex justify-center text-center items-center">
					<Image
						src="/assets/slide-banner/slide-4.jpg"
						alt="slide-4.jpg"
						className="object-contain h-full w-full block bg-lightBlue"
						fill
					/>
				</SwiperSlide>
				<SwiperSlide className="flex justify-center text-center items-center">
					<Image
						src="/assets/slide-banner/slide-5.jpg"
						alt="slide-5.jpg"
						className="object-contain h-full w-full block bg-lightBlue"
						fill
					/>
				</SwiperSlide>
				<SwiperSlide className="flex justify-center text-center items-center">
					<Image
						src="/assets/slide-banner/slide-6.jpg"
						alt="slide-6.jpg"
						className="object-contain h-full w-full block bg-lightBlue"
						fill
					/>
				</SwiperSlide>
			</Swiper>
		</section>
	);
};

export default Banner;
