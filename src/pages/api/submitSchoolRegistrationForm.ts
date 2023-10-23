import type { NextApiRequest } from "next/types";
import nodemailerTransporter from "../../utils/nodemailer";
import { unlink } from "fs";
import { FILE_FORM_UPLOAD_NAME, html } from "../../utils/settings/setting";
import _nextConnect from "../../middlewares/nextConnect";
import guardContentLength from "../../middlewares/guardContentLength";
import handleFiles from "../../middlewares/handleFiles";
import { TSchoolRegistrationForm } from "../../components/ServiceGroups/types";
import { SchoolRegistrationFormBody } from "../../components/ServiceGroups/setting";

export const config = {
	api: {
		bodyParser: false,
	},
};

type NextConnectApiRequest = NextApiRequest & {
	files: Express.Multer.File[];
};

export default new _nextConnect().instance
	.use(guardContentLength)
	.use(handleFiles(FILE_FORM_UPLOAD_NAME))
	.post(async (request: NextConnectApiRequest, response) => {
		const files = request.files;
		const data: TSchoolRegistrationForm = request.body;
		data.semester = JSON.parse((<unknown>data.semester) as string);

		if (!data.id) {
			return response.status(400).json({ message: "Bad request" });
		}

		const attachments = files.map((file) => {
			return {
				filename: file.filename.replace(`${data.id}_`, ""),
				path: file.path,
			};
		});

		nodemailerTransporter
			.sendMail({
				from: process.env["MAIL_USER"],
				to: process.env["MAIL_USER"],
				html: html(SchoolRegistrationFormBody(data)),
				subject: `Yêu cầu Đăng ký trường học của "${data.name}"`,
				attachments: attachments,
			})
			.then((result) => {
				files.forEach((file) => {
					unlink(file.path, (error) => {
						if (error) {
							console.trace(error);
							throw error;
						}
						console.log(`${file.path} was deleted`);
					});
				});
				console.log(result.accepted);
				return response.status(200).json({ success: true });
			})
			.catch((error) => {
				console.trace(error);
				return response.status(400).json({ message: "Bad request" });
			});
	});
