import React from "react";
import { TComponent } from "../../utils/types";
import TagInfo from "./TagInfo";

const TagInfoGroups: TComponent = () => {

	return (
		<section id="tag-info-groups">
			<div className="tag-info-groups-container grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-none gap-x-4 gap-y-10 lg:gap-y-0 justify-center my-17.5 md:my-25 mx-15 md:mx-8 bg-white">
				<div className="tag-info-wrap flex">
					<TagInfo
						key="Thị trường"
						header="Thị trường"
						imgSrc="/assets/tagInfoGroups/market.svg"
						imgAlt="market.svg"
						bgColor="blue"
						listContent={["Việt Nam, Phillipine, Ấn Độ,", "Trung Quốc, Hong Kong"]}
					/>
				</div>
				<div className="tag-info-wrap flex">
					<TagInfo
						key="Khách hàng"
						header="Khách hàng"
						imgSrc="/assets/tagInfoGroups/customer.svg"
						imgAlt="customer.svg"
						bgColor="pink"
						listContent={["Hỗ trợ hơn 10 000", "khách hàng"]}
					/>
				</div>
				<div className="tag-info-wrap flex">
					<TagInfo
						key="Hồ sơ"
						header="Hồ sơ"
						imgSrc="/assets/tagInfoGroups/profile.svg"
						imgAlt="profile.svg"
						bgColor="blue"
						listContent={["Hơn 3000 hồ sơ", "nhận được PR"]}
					/>
				</div>
				<div className="tag-info-wrap flex">
					<TagInfo
						key="Tỷ lệ"
						header="Tỷ lệ"
						imgSrc="/assets/tagInfoGroups/percent.svg"
						imgAlt="percent.svg"
						bgColor="pink"
						listContent={["97% tỷ lệ đậu hồ sơ PR", "và Visa du học"]}
					/>
				</div>
			</div>
		</section>
	);
};

export default TagInfoGroups;
