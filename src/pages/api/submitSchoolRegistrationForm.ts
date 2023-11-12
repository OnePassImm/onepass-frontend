import type { NextApiRequest, NextApiResponse } from "next/types";
import nodemailerTransporter from "../../utils/nodemailer";
import nextConnect from "next-connect";
import { html } from "../../utils/settings/setting";
import { TSchoolRegistrationForm } from "../../components/ServiceGroups/types";
import { SchoolRegistrationFormBody } from "../../components/ServiceGroups/setting";

export default nextConnect().post(async (request: NextApiRequest, response: NextApiResponse) => {
	const data: TSchoolRegistrationForm = request.body;
	data.semester = JSON.parse((<unknown>data.semester) as string);

	if (!data.id) {
		return response.status(400).json({
			message: "Bad request",
		});
	}

	nodemailerTransporter
		.sendMail({
			from: process.env["MAIL_USER"],
			to: process.env["MAIL_USER"],
			html: html(SchoolRegistrationFormBody(data)),
			subject: `Yêu cầu Đăng ký trường học của "${data.name}"`,
		})
		.then((result) => {
			console.log(`user: ${data.name} - ${data.id} sent School Registration mail`);
			console.log(result.accepted);
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
