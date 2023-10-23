import { MAX_NUMBER_FILE, MAX_CONTENT_FILE_SIZE, FILE_FORM_UPLOAD_NAME } from "../../utils/settings/setting";
import { TITLE as InternationalInsuranceTitle } from "./Forms/InternationalInsuranceForm";
import { TITLE as SchoolRegistrationTitle } from "./Forms/SchoolRegistrationForm";
import { TITLE as SettlementJobTitle } from "./Forms/SettlementJobForm";
export { MAX_NUMBER_FILE, MAX_CONTENT_FILE_SIZE, FILE_FORM_UPLOAD_NAME };
import { TInternationalInsuranceForm, TSchoolRegistrationForm, TSettlementJobForm } from "./types";

export const FILE_FORM_UPLOAD_TYPE = {
	PASSPORT: "passort",
	IELTS: "ielts",
	TRANSCRIPT_HIGH_SCHOOL: "transcript-high-school",
	TRANSCRIPT_COLLEGE: "transcript-college",
};

export enum InstitutionTypeSchool {
	COLLEGE = "College",
	UNIVERSITY = "University",
	LANGUAGES_SCHOOL = "Languages School",
	HIGH_SCHOOL_PUBLIC = "High School Public",
	HIGH_SCHOOL_PRIVATE = "High School Private",
}

export enum Semester {
	FIRST = "Tháng 1",
	SECOND = "Tháng 5",
	THIRD = "Tháng 9",
	FOURTH = "Khác",
}

export const SchoolRegistrationFormBody = (data: TSchoolRegistrationForm) => {
	return `<h2 class="title-form">${SchoolRegistrationTitle.toLocaleUpperCase()}</h2>
    <div class="form-container">
        <table>
            <tr>
                <td class="name">
                    Họ & tên:
                </td>
                <td class="info-name">
                    ${data.name}
                </td>
            </tr>
            <tr>
                <td class="email">
                    Email:
                </td>
                <td class="info-email">
                    ${data.email}
                </td>
            </tr>
            <tr>
                <td class="phone">
                    Số điện thoại:
                </td>
                <td class="info-phone">
                    ${data.phone}
                </td>
            </tr>
            <tr>
                <td class="institution-type-school">
                    Chương trình học:
                </td>
                <td class="info-institution-type-school">
                    ${data.institutionTypeSchool}
                </td>
            </tr>
            <tr>
                <td class="semester">
                    Kì nhập học:
                </td>
                <td class="info-semester">
                    ${data.semester.semesterFirst ? `${Semester.FIRST},` : ""}
                    ${data.semester.semesterSecond ? `${Semester.SECOND},` : ""}
                    ${data.semester.semesterThird ? `${Semester.THIRD},` : ""}
                    ${data.semester.semesterFourth ? `${Semester.FOURTH},` : ""}
                </td>
            </tr>
            ${
				data.major
					? `<tr>
                            <td class="major">
                                Ngành học và ghi chú:
                            </td>
                            <td class="info-major">
                                ${data.major}
                            </td>
                        </tr>`
					: ``
			}
            
        </table>
    </div>`;
};

export const SettlementJobFormBody = (data: TSettlementJobForm) => {
	return `<h2 class="title-form">${SettlementJobTitle.toLocaleUpperCase()}</h2>
    <div class="form-container">
        <table>
            <tr>
                <td class="name">
                    Họ & tên:
                </td>
                <td class="info-name">
                    ${data.name}
                </td>
            </tr>
            <tr>
                <td class="email">
                    Email:
                </td>
                <td class="info-email">
                    ${data.email}
                </td>
            </tr>
            <tr>
                <td class="phone">
                    Số điện thoại:
                </td>
                <td class="info-phone">
                    ${data.phone}
                </td>
            </tr>
            <tr>
                <td class="job">
                    Công việc:
                </td>
                <td class="info-job">
                    ${data.job}
                </td>
            </tr>
        </table>
    </div>`;
};

export const InternationalInsuranceFormBody = (data: TInternationalInsuranceForm) => {
	return `<h2 class="title-form">${InternationalInsuranceTitle.toLocaleUpperCase()}</h2>
    <div class="form-container">
        <table>
            <tr>
                <td class="name">
                    Họ & tên:
                </td>
                <td class="info-name">
                    ${data.name}
                </td>
            </tr>
			${
				data.doB
					? `<tr>
							<td class="dob">
								Ngày sinh:
							</td>
							<td class="info-dob">
								${data.doB}
							</td>
						</tr>`
					: ``
			}
			${
				data.insurancePeriod
					? `<tr>
							<td class="insurance-period">
								Số điện thoại:
							</td>
							<td class="info-insurance-period">
							${data.insurancePeriod}
							</td>
						</tr>`
					: ``
			}
			<tr>
                <td class="phone">
                    Số điện thoại:
                </td>
                <td class="info-phone">
                    ${data.phone}
                </td>
            </tr>
			${
				data.address
					? `<tr>
							<td class="address">
								Địa chỉ:
							</td>
							<td class="info-address">
							${data.address}
							</td>
						</tr>`
					: ``
			}
			<tr>
                <td class="email">
                    Email:
                </td>
                <td class="info-email">
                    ${data.email}
                </td>
            </tr>
        </table>
    </div>`;
};

export const LIST_COLLEGE_SCHOOL = [
	"Bow Valley College, Calgary, Alberta",
	"Herzing College, Montreal, Quebec",
	"Fanshawe College, London, Ontario",
	"JRS College, Scarborough, Ontario",
	"Academy of Learning, Toronto, Ontario",
	"Canadian Tourism College, Vancouver, British Columbia",
	"Cornerstone College, Vancouver, British Columbia",
	"Langara College, Vancouver, British Columbia",
	"Lambton College of Applied Arts and Technology, Sarnia, Ontario",
	"Hanson Canada (Cambrian), Toronto/Vancouver/Brampton, Ontario/British Columbia",
	"Saskatchewan Polytechnic, Saskatoon, Saskatchewan",
	"Conestoga College, Toronto, Ontario",
	"Winston College, New Westminster, British Columbia",
	"Academy of Aeronautics, Montreal, Quebec",
	"Centennial College, Toronto, Ontario",
	"Toronto International College, Toronto, Ontario",
	"Ashton College, Vancouver, British Columbia",
	"The College of New Caledonia, Prince George, British Columbia",
	"Lester B. Pearson Vocational College, Dorval, Quebec",
	"Blanche Macdonald Centre for Applied Design, Vancouver, British Columbia",
	"Canadian College of Massage & Hydrotherapy, Ontario",
	"North Island College, Vancouver Island, British Columbia",
	"Sir Sandford Fleming College of Applied Arts and Technology, Peterborough, Ontario",
	"ITD College, Vancouver, British Columbia",
	"Georgian College, Barrie, Ontario",
	"Toronto School of Management, Toronto, Ontario",
	"Durham College, Oshawa, Ontario",
	"Trios College, Mississauga, Ontario",
	"Arbutus College, Vancouver, British Columbia",
	"Camosun College, Victoria, British Columbia",
	"Anderson College, Toronto, Ontario",
	"Lakeland College, Vermilion&Llyodminister, Alberta",
	"Sault College, Sault Ste.Marie, Ontario",
	"Sprott Shaw Language College, Vancouver, British Columbia",
	"SIAST ( The Saskatchewan Institute of Applied Science and Technology), Saskatoon, Saskatchewan",
	"GPRC, Grande Prairie, Alberta",
	"Nova Scotia College of Early Childhood Education (NSCECE), Halifax, Nova Scotia",
	"Vancouver Film School , Vancouver, British Columbia",
	"IBT College, Toronto, Ontario",
	"Omni College, Richmond, British Columbia",
	"Navitas Ltd. ( Fraser International College and International College of Manitoba), Multiple Locations",
	"Lethbridge College, Alberta",
	"Lasalle College, Quebec/Vancouver, Montreal/British Columbia",
	"Evergreen College, Toronto, Ontario",
	"Assiniboine Community College, Brandon, Manitoba",
	"SAIT (Southern Alberta Institute of Technology), Calgary, Alberta",
	"Camber College, City of Powell River, British Columbia",
	"Acsenda and Arbutus College, Vancouver, British Columbia",
	"CDI College (Vancouver), VCC, VCAD, PCU, Vancouver, British Columbia",
	"CDI College (Montreal), Montreal, Quebec",
	"VCC (Vancouver Community College), Vancouver, British Columbia",
	"Sheridan College, Oakville, Ontario",
	"ACE Acumen, GTA, Ontario",
	"St Clair College, Windsor, Ontario",
	"Niagara College, Welland, Ontario",
	"Royal Crown College of Business and Technology, Toronto, Ontario",
	"Yukon College, Whitehorse, Yukon Territory",
	"Pures College of Technology, Toronto, Ontario",
	"George Brown College, Toronto, Ontario",
	"Mohawk College, Hamilton, Ontario",
	"Art Institute of Vancouver, Vancouver, British Columbia",
	"Northwest Community College, Terrace, British Columbia",
	"CEGEP, Montreal, Quebec",
	"BCIT College, Burnaby, British Columbia",
	"Northern College, Timmins, Ontario",
	"IIT (International Institute of Travel), Toronto, Ontario",
	"Algonquin College, Ottawa, Ontario",
	"Humber College, GTA, Ontario",
	"Canadore College, North Bay, Ontario",
	"Okanagan College, Kelowna, British Columbia",
	"Seneca College, GTA, Ontario",
	"Manitoba Institute of Technology, Winnipeg, Manitoba",
	"Winnipeg Technical College, Winnipeg, Manitoba",
	"Medicine Hat College, Medicine Hat, Alberta",
	"Red River College, Winnipeg, Manitoba",
	"Oxford College of Arts, Business, and Technology, Toronto, Ontario",
];

export const LIST_UNIVERSITY_SCHOOL = [
	"Cape Breton University, Sydney, Nova Scotia",
	"University of Prince Edward Island, Charlottetown, PEI",
	"University of Fraser Valley, Abbotsford, British Columbia",
	"University of Ontario Instituted of Technology (UOIT), Oshawa, Ontario",
	"University of Saskatchewan, Saskatoon, Saskatchewan",
	"University of Calgary, Calgary, Alberta",
	"Lakehead University, Thunder Bay, Ontario",
	"Conrcordia University of Edmonton, Edmonton, Alberta",
	"Concordia University, Montreal, Quebec",
	"Laurentian University, Sudbury, Ontario",
	"York University, Toronto, Ontario",
	"University of Manitoba, Manitoba, Winnipeg",
	"University of Toronto (School of Continuing Studies), Toronto, Ontario",
	"Vancouver Island University, Vancouver Island, British Columbia",
	"Mount Royal University, Calgary, Alberta",
	"King's University College at Western College, London, Ontario",
	"University of Victoria, Victoria, British Columbia",
	"Acadia University, Wolfville, Nova Scotia",
	"Queen's University, Kingston, Ontario",
	"Mount Saint Vincent University, Halifax, Nova Scotia",
	"University of California, San Diego, United States",
	"University of California, Santa Barbara, United States",
	"California State University, Los Angeles, United States",
	"Univrsity of Michigan-Flint, Michigan, United States",
	"University of Regina, Regina, Saskatchewan",
	"Brock University, St.Catherines, Ontario",
	"University of Windsor, Windsor, Ontario",
	"Capilano University, North Vancouver, British Columbia",
	"Thompson Rivers University, Kamloops, British Columbia",
	"Mount Allison University, Sackville, New Brunswick",
	"University of New Brunswick, Saint John, New Brunswick",
	"University of Guelph, Guelph, Ontario",
	"Texas Wesleyan University, Texas, United States",
	"Royal Roads Unviersity, Victoria, British Columbia",
	"University Canada West, Vancouver (+ more), British Columbia",
	"Kwantlen Polytechnic University, Surrey, British Columbia",
];

export const LIST_LANGUAGES_SCHOOL = ["ILAC, Vancouver, British Columbia", "ILAC, Toronto, Ontario"];

export const LIST_HIGH_SCHOOL_PUBLIC = [
	"Abbotsford School District, Abbotsford, British Columbia",
	"Burnaby District School Board, Burnaby, British Columbia",
	"Catholic District School Board of Eastern Ontario [CDSBEO], Kemptville, Ontario",
	"District School Board of Niagara, St. Catharines, Ontario",
	"Edmonton Public School, Edmonton, Alberta",
	"Greater Essex Country District School Board, Windsor, Ontario",
	"Greater Saskatoon Catholic Schools, Saskatoon, Saskatchewan",
	"Halton Catholic District School Board - Public, Halton, British Columbia",
	"Hamilton Wentworth District School Board [HWDSB], Hamilton, Ontario",
	"Kawartha Pine Ridge District School Board [KPRDSB], Peterborough, Ontario",
	"Lakehead Public School, Thunder Bay, Ontario",
	"Langley School District, Langley, British Columbia",
	"Ottawa-Carleton District School Board [OCDSB], Ottawa, Ontario",
	"Peel District School Board, Peel, Ontario",
	"Sooke Schools, Victoria, British Columbia",
	"St. James-Assiniboia School Division, Winnipeg, Manitoba",
	"Surrey School District, Surrey, British Columbia",
	"Thames Valley District School Board [TVDSB], London, Ontario",
	"The Calgary Board of Education, Calgary, Alberta",
	"The Nova Scotia International Student Program, Nova Scotia, New Brunswick",
	"Toronto Catholic District School Board [TCDSB], Toronto, Ontario",
	"Toronto District School Board [TDSB], Toronto, Ontario",
	"Upper Canada Leger Centre, Brockville, Ontario",
	"Vancouver School Board, Vancouver, British Columbia",
	"Waterloo Catholic District School Board, Waterloo, Ontario",
	"York Catholic District School Board, Richmond Hill, Ontario",
	"York Region District School Board [YRDSB], Richmond Hill, Ontario",
];

export const LIST_HIGH_SCHOOL_PRIVATE = [
	"Albert College, Belleville, Ontario", //
	"Birmingham International College of Canada (BICC), Toronto, Ontario",
	"Bodwell High School, Toronto, Ontario",
	"Bronte College, Mississauga, Ontario",
	"Brookes Shawnigan Lake, Shawnigan Lake, British Columbia",
	"Brooklyn College, Toronto, Ontario",
	"Columbia International College, Saskatoon, Saskatchewan",
	"Halton Catholic District School Board - Private, Hamilton, Ontario",
	"J.Addison School, Markham, Ontario",
	"Laekfield College School, Laekfield, Ontario",
	"London International Acaemy, London, Ontario",
	"Mentor College, Mississauga, Ontario",
	"Niagara Christian Community of School (NCC), Niagara, Ontario",
	"Ridley College, St. Catharines, Ontario",
	"Upper Madison College – High School, Toronto, Ontario",
	"Urban International School, Toronto, Ontario",
];

export const LIST_JOB = [
	"Nails", //
	"Cook",
	"Carpenter",
	"Caregiver",
	"Farm Workers",
	"Food Supervisor",
	"Autobody Technician",
	"Housekeeper",
	"Kitchen Helper",
	"Baker",
	"Warehouse Worker",
	"Packaging Worker",
	"Construction Worker",
	"Small Truck Driver",
	"Security Supervisor",
];
