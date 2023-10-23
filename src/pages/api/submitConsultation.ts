import type { NextApiRequest, NextApiResponse } from "next";
import nodemailerTransporter from "../../utils/nodemailer";
import _nextConnect from "../../middlewares/nextConnect";
import { ConsultationFormBody } from "../../components/Consultation/setting";
import { html } from "../../utils/settings/setting";
import { TConsultationForm } from "../../components/Consultation/types";

export default new _nextConnect().instance.post(async (request: NextApiRequest, response: NextApiResponse) => {
	const data: TConsultationForm = request.body;
	nodemailerTransporter
		.sendMail({
			from: process.env["MAIL_USER"],
			to: process.env["MAIL_USER"],
			html: html(ConsultationFormBody(data)),
			subject: `Yêu cầu Tư vấn miễn phí của "${data.name}"`,
		})
		.then((result) => {
			console.log(`user: ${data.name} - ${data.id} sent Consultation mail`);
			return response.status(200).json({ success: true });
		})
		.catch((error) => {
			console.trace(error);
			return response.status(400).json({ message: "Bad request" });
		});
});
