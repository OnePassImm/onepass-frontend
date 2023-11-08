import Image from "next/image";

const Footer = () => {
	const title = "text-base font-bold whitespace-nowrap uppercase text-strongYellow";
	const info = "font-semibold text-base";

	const iconContainer = "flex w-6 h-6 mr-4 md:ml-4 relative";

	const vnAddressInfo = "Tầng 10, 55 Hồ Hảo Hớn, Phường Cô Giang, Quận 1, TP.HCM, Việt Nam";
	const caAddressInfo = "Updating...";
	return (
		<section id="footer">
			<div className="footer-container-wrap bg-lightYellow rounded-t-[30px] mt-17.5 md:mt-25">
				<div className="footer-container grid grid-cols-8 lg:grid-cols-5 grid-rows-5 lg:grid-rows-2 gap-4 md:gap-8 py-10 mx-15 md:mx-8 lg:pr-20">
					<div className="sub-section col-span-2 lg:col-span-1 justify-items-start">
						<div className="icon-container relative w-full h-full">
							<Image
								src="/logo/full-logo.svg"
								alt="logo"
								fill
								sizes=""
								unoptimized
								className="object-contain object-top"
							/>
						</div>
					</div>
					<div className="sub-section col-span-5 lg:col-span-2">
						<div className="title-container text-2xl md:text-4xl font-bold uppercase text-strongPink">Nhận visa Canada cực dễ cùng One Pass</div>
					</div>
					<div className="sub-section col-start-3 lg:col-start-auto row-start-2 lg:row-start-auto col-span-5 lg:col-span-2">
						<div className="description-container text-base md:text-xl font-semibold">Với hơn 10 năm kinh nghiệm tư vấn định cư và du học Canada, chúng tôi tự tin sẽ hỗ trợ các bạn đạt được tấm thẻ PR mà bạn mong muốn.</div>
					</div>
					<div className="sub-section lg:hidden relative row-start-3 col-span-full">
						<div className="separate-line absolute h-[1px] w-full bg-strongYellow top-1/2"></div>
					</div>
					<div className="sub-section row-start-4 lg:row-start-auto lg:col-start-2 col-span-5 lg:col-span-1">
						<div className="vn-address-container">
							<div className={`title ${title}`}>Văn Phòng Việt Nam</div>
							<a
								href={`https://www.google.com/maps?q=${vnAddressInfo}`}
								target="_blank"
								className={`info ${info}`}>
								{vnAddressInfo}
							</a>
						</div>
					</div>
					<div className="sub-section relative lg:static row-start-5 lg:row-start-auto col-span-5 lg:col-span-1">
						<div className="ca-address-container absolute lg:static bottom-0 lg:bottom-auto">
							<div className={`title ${title}`}>Văn Phòng Canada</div>
							<a
								href={`https://www.google.com/maps?q=${caAddressInfo}`}
								target="_blank"
								className={`info ${info}`}>
								{caAddressInfo}
							</a>
						</div>
					</div>
					<div className="sub-section row-start-4 lg:row-start-auto col-start-7 lg:col-start-auto col-span-2 lg:col-span-1">
						<div className="phone-container">
							<div className={`title ${title}`}>Liên hệ tư vấn</div>
							<a
								href="tel:+84933988893"
								className={`info ${info}`}>
								0933988893
							</a>
						</div>
					</div>
					<div className="sub-section relative row-start-5 lg:row-start-auto col-start-7 lg:col-start-auto col-span-2 lg:col-span-1">
						<div className="social-container flex absolute bottom-0">
							<div className="gmail-container">
								<a
									className={`icon-container ${iconContainer}`}
									href="mailto:info@onepassimm.com"
									target="_blank">
									<Image
										src="/assets/icon/gmail.svg"
										alt="gmail.svg"
										fill
										unoptimized
										sizes="88px"
										className="!relative"
									/>
								</a>
							</div>
							<div className="fb-container">
								<a
									className={`icon-container ${iconContainer}`}
									href="https://www.facebook.com/profile.php?id=61550333613885"
									target="_blank">
									<Image
										src="/assets/icon/facebook.svg"
										alt="gmail.svg"
										fill
										unoptimized
										sizes="40px"
										className="!relative"
									/>
								</a>
							</div>
							<div className="zalo-container">
								<a
									className={`icon-container ${iconContainer}`}
									href="https://zalo.me/0933988893"
									target="_blank">
									<Image
										src="/assets/icon/zalo.svg"
										alt="gmail.svg"
										fill
										unoptimized
										sizes="50px"
										className="!relative"
									/>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Footer;
