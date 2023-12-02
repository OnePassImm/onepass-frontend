import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { SliderContent } from "./setting";

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
				{SliderContent.map((item) => {
					if (!item.href) {
						return (
							<SwiperSlide className="justify-center text-center items-center">
								<Image
									src={item.imgSrc}
									alt={item.imgAlt}
									className="object-contain h-full w-full block bg-lightBlue"
									fill
								/>
							</SwiperSlide>
						);
					}
					return (
						<SwiperSlide className="justify-center text-center items-center">
							<Link
								href={item.href}
								target="_blank">
								<Image
									src={item.imgSrc}
									alt={item.imgAlt}
									className="object-contain h-full w-full block bg-lightBlue"
									fill
								/>
							</Link>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</section>
	);
};

export default Banner;
