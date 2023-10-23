import Image from "next/image";

const ImageRunner = () => {
	return (
		<div className="image-runner h-full flex shrink-0 relative ">
			{[...Array(69).keys()].reverse().map((idx) => (
				<div
					key={idx}
					className="image-container h-full w-fit flex shrink-0 items-center px-4 py-[4vh] border-r border-silver">
					<div className="inner-image-container h-full aspect-[3/4] border border-strongPink before:absolute before:top-2 before:right-2 before:z-10 before:flex before:justify-center before:items-center before:pb-1 before:w-1/12 before:aspect-square before:font-medium before:text-2xl before:border before:border-strongPink before:bg-white">
						<Image
							src={`/assets/approvalCases/image-${idx}.jpg`}
							alt={`approvalCases/image-${idx}.jpg`}
							fill={true}
							sizes="30vw"
							className="image !relative object-contain px-1 py-2"
						/>
					</div>
				</div>
			))}
		</div>
	);
};

export default ImageRunner;
