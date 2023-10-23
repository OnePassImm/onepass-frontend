import { NextApiRequest, NextApiResponse } from "next/types";
import { ERROR_CONTENT_LENGTH, ERROR_UNKNOWN } from "../utils/settings/error";
import { MAX_CONTENT_FILE_SIZE } from "../utils/settings/setting";
import { NextHandler } from "next-connect";

export default (request: NextApiRequest, response: NextApiResponse, next: NextHandler) => {
	const contentLength = request.headers["content-length"];
	if (!contentLength || typeof Number(contentLength) !== "number") {
		throw new Error(ERROR_UNKNOWN);
	}
	if (parseInt(contentLength) > MAX_CONTENT_FILE_SIZE) {
		throw new Error(ERROR_CONTENT_LENGTH);
	}
	next();
};
