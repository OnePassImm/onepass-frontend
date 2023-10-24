import type { NextApiRequest } from "next/types";
import nodemailerTransporter from "../../utils/nodemailer";
import { html } from "../../utils/settings/setting";
import _nextConnect from "../../middlewares/nextConnect";
import { SettlementJobFormBody } from "../../components/ServiceGroups/setting";
import { TSettlementJobForm } from "../../components/ServiceGroups/types";

export const config = {
	api: {
		bodyParser: false,
	},
};

export default new _nextConnect().instance.post(async (request: NextApiRequest, response) => {
	const data: TSettlementJobForm = request.body;

	if (!data.id) {
		return response.status(400).json({
			message: "Bad request",
		});
	}

	nodemailerTransporter
		.sendMail({
			from: process.env["MAIL_USER"],
			to: process.env["MAIL_USER"],
			html: html(SettlementJobFormBody(data)),
			subject: `Yêu cầu Đăng ký việc làm định cư của "${data.name}"`,
		})
		.then((result) => {
			console.log(`user: ${data.name} - ${data.id} sent Settlement Job mail`);
			console.log(result);
			return response.status(200).json({
				success: true,
			});
		})
		.catch((error) => {
			console.trace(error);
			return response.status(400).json({
				message: "Bad request",
			});
		});
});
