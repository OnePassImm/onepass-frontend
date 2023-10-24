import { InstitutionTypeSchool } from "./setting";

export type TSchoolRegistrationForm = {
	id: string;
	name: string;
	email: string;
	phone: string;
	semester: {
		semesterFirst: boolean;
		semesterSecond: boolean;
		semesterThird: boolean;
		semesterFourth: boolean;
	};
	institutionTypeSchool: InstitutionTypeSchool;
	school: string;
	major?: string;
	files: FileList;
};

export type TSettlementJobForm = {
	id: string;
	name: string;
	email: string;
	phone: string;
	job: string;
	files: FileList;
};

export type TInternationalInsuranceForm = {
	id: string;
	name: string;
	email: string;
	phone: string;
	doB?: string;
	insurancePeriod?: string;
	address?: string;
};
