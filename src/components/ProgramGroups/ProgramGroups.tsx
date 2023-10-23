import { Direction, TComponent } from "../../utils/types";
import ProgramCard from "./ProgramCard";
import { LIST_GENERAL_INFO_PROJECT } from "./setting";
import ProgramSubGroup from "./ProgramSubGroup";

type TSubComponent = {
	ProgramCard: typeof ProgramCard;
};

const ProgramGroups: TComponent & TSubComponent = () => {
	return (
		<section id="program-groups">
			<div className="program-groups-container flex flex-col my-17.5 md:my-25 mx-15 md:mx-8">
				<div className="title-container flex items-center justify-center w-25 md:w-40 h-6 md:h-10 border rounded-full border-black my-8">
					<span className="font-bold text-xs md:text-2xl mb-0.5 md:mb-1">Chương trình</span>
				</div>
				<div className="program-sub-group-wrap">
					<div className="program-sub-group-wrap-inner aspect-[27/5] my-4 md:my-10">
						<ProgramSubGroup
							direction={Direction.Left}
							cardLeft={{
								...LIST_GENERAL_INFO_PROJECT[0],
								direction: Direction.Left,
							}}
							cardRight={{
								...LIST_GENERAL_INFO_PROJECT[1],
								direction: Direction.Right,
							}}
						/>
					</div>
					<div className="program-sub-group-wrap-inner aspect-[27/5] my-4 md:my-10">
						<ProgramSubGroup
							direction={Direction.Right}
							cardLeft={{
								...LIST_GENERAL_INFO_PROJECT[2],
								direction: Direction.Left,
							}}
							cardRight={{
								...LIST_GENERAL_INFO_PROJECT[3],
								direction: Direction.Right,
							}}
						/>
					</div>
					<div className="program-sub-group-wrap-inner aspect-[27/5] my-4 md:my-10">
						<ProgramSubGroup
							direction={Direction.Left}
							cardLeft={{
								...LIST_GENERAL_INFO_PROJECT[4],
								direction: Direction.Left,
							}}
							cardRight={{
								...LIST_GENERAL_INFO_PROJECT[5],
								direction: Direction.Right,
							}}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

ProgramGroups.ProgramCard = ProgramCard;

export default ProgramGroups;
