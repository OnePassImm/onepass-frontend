import nodemailer from "nodemailer";
const nodemailerTransporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env["MAIL_USER"],
		pass: process.env["MAIL_PASS"],
	},
});
export default nodemailerTransporter;
