import { State } from "../../../utils/types";

type TStateModal = {
	name: string;
	state: State;
};

const StateModal = (props: TStateModal) => {
	return (
		<div className="state-modal">
			<div className="state-modal-container p-[5%] bg-white aspect-square flex flex-col w-full h-full items-center rounded-[30px]">
				<div className="title-container text-center">
					<span className="title font-extrabold text-5xl text-strongPink uppercase">{props.name}</span>
				</div>
				<div className="state-container flex flex-col h-full justify-center items-center">
					{props.state === State.SUCCESS ? (
						<div className="success flex justify-center items-center border-2 border-strongPink rounded-full r w-[5vw] h-[5vw]">
							<div className="success-icon-container flex justify-center items-center w-2/3 h-2/3">
								<svg
									viewBox="0 0 29 21"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										className="fill-strongPink"
										d="M9.62498 20.6561C9.46133 20.6506 9.30053 20.6117 9.15243 20.5419C9.00434 20.472 8.87207 20.3726 8.76373 20.2498L0.638734 12.1248C0.48382 12.0244 0.353749 11.8901 0.258343 11.732C0.162938 11.574 0.10469 11.3963 0.0879988 11.2124C0.0713075 11.0285 0.0966086 10.8433 0.161992 10.6706C0.227375 10.498 0.331131 10.3424 0.465427 10.2157C0.599722 10.089 0.761047 9.99449 0.937221 9.93927C1.11339 9.88405 1.29981 9.86957 1.4824 9.89694C1.66498 9.9243 1.83897 9.99279 1.99121 10.0972C2.14346 10.2017 2.26998 10.3393 2.36123 10.4998L9.62498 17.7148L26.6387 0.749843C26.8678 0.601333 27.1401 0.534024 27.4119 0.558703C27.6838 0.583383 27.9395 0.698623 28.1381 0.885952C28.3367 1.07328 28.4666 1.32185 28.507 1.59182C28.5475 1.86179 28.4962 2.13753 28.3612 2.37484L10.4862 20.2498C10.3779 20.3726 10.2456 20.472 10.0975 20.5419C9.94944 20.6117 9.78864 20.6506 9.62498 20.6561Z"
									/>
								</svg>
							</div>
						</div>
					) : props.state === State.FAILURE ? (
						<div className="failure flex justify-center items-center border-2 border-strongPink rounded-full r w-[5vw] h-[5vw]">
							<div className="failure-icon-container flex justify-center items-center w-2/5 h-2/5">
								<svg
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										className="fill-strongPink"
										d="M11.7668 9.99993L19.1335 2.63326C19.2563 2.51883 19.3548 2.38083 19.4231 2.22749C19.4914 2.07416 19.5281 1.90864 19.5311 1.7408C19.5341 1.57296 19.5032 1.40625 19.4403 1.2506C19.3775 1.09495 19.2839 0.953565 19.1652 0.834867C19.0465 0.716169 18.9051 0.622595 18.7494 0.559726C18.5938 0.496858 18.4271 0.465983 18.2592 0.468945C18.0914 0.471906 17.9259 0.508643 17.7726 0.576962C17.6192 0.645282 17.4812 0.743786 17.3668 0.866597L10.0001 8.23326L2.63345 0.866597C2.3965 0.645797 2.08308 0.525592 1.75925 0.531305C1.43541 0.537019 1.12644 0.668206 0.897418 0.897228C0.668396 1.12625 0.537209 1.43522 0.531495 1.75906C0.525781 2.0829 0.645987 2.39631 0.866787 2.63326L8.23345 9.99993L0.866787 17.3666C0.632703 17.601 0.501221 17.9187 0.501221 18.2499C0.501221 18.5812 0.632703 18.8989 0.866787 19.1333C1.10116 19.3673 1.41887 19.4988 1.75012 19.4988C2.08137 19.4988 2.39908 19.3673 2.63345 19.1333L10.0001 11.7666L17.3668 19.1333C17.6012 19.3673 17.9189 19.4988 18.2501 19.4988C18.5814 19.4988 18.8991 19.3673 19.1335 19.1333C19.3675 18.8989 19.499 18.5812 19.499 18.2499C19.499 17.9187 19.3675 17.601 19.1335 17.3666L11.7668 9.99993Z"
										fill="#CE3832"
									/>
								</svg>
							</div>
						</div>
					) : (
						<div className="loading animate-spin border-4 border-strongPink border-t-transparent border-l-transparent rounded-full r w-[5vw] h-[5vw]"></div>
					)}
					<div className="description-container my-4">
						<span className="description uppercase font-bold text-2xl text-strongYellow">{props.state === State.SUCCESS ? "Đăng ký thành công" : props.state === State.FAILURE ? "Đăng ký thất bại. Hãy thử lại" : "Đang xử lý..."}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StateModal;
