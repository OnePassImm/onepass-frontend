const isEmailValid = (email: string) => {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		return true;
	}
	return false;
};

const isPhoneValid = (phone: string) => {
	if (phone.match(/^\d{10}$/) || phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/) || phone.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)) {
		return true;
	}
	return false;
};
export { isEmailValid, isPhoneValid };
