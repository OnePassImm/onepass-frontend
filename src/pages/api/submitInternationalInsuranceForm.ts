import type { NextApiRequest, NextApiResponse } from "next";
import nodemailerTransporter from "../../utils/nodemailer";
import _nextConnect from "../../middlewares/nextConnect";
import { html } from "../../utils/settings/setting";
import { TInternationalInsuranceForm } from "../../components/ServiceGroups/types";
import { InternationalInsuranceFormBody } from "../../components/ServiceGroups/setting";

export default new _nextConnect().instance.post(async (request: NextApiRequest, response: NextApiResponse) => {
	const data: TInternationalInsuranceForm = request.body;
	nodemailerTransporter
		.sendMail({
			from: process.env["MAIL_USER"],
			to: process.env["MAIL_USER"],
			html: html(InternationalInsuranceFormBody(data)),
			subject: `Yêu cầu Bảo hiểm quốc tế của "${data.name}"`,
		})
		.then((result) => {
			console.log(result);
			return response.status(200).json({ success: true });
		})
		.catch((error) => {
			console.trace(error);
			return response.status(400).json({ message: "Bad request" });
		});
});
