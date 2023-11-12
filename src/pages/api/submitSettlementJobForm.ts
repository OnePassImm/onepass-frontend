import type { NextApiRequest, NextApiResponse } from "next/types";
import nodemailerTransporter from "../../utils/nodemailer";
import nextConnect from "next-connect";
import { html } from "../../utils/settings/setting";
import { SettlementJobFormBody } from "../../components/ServiceGroups/setting";
import { TSettlementJobForm } from "../../components/ServiceGroups/types";

export default nextConnect().post(async (request: NextApiRequest, response: NextApiResponse) => {
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
