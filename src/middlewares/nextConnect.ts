import nextConnect, { NextConnect } from "next-connect";
import { NextApiRequest, NextApiResponse } from "next/types";

class _nextConnect {
	readonly instance: NextConnect<NextApiRequest, NextApiResponse>;
	constructor() {
		this.instance = nextConnect<NextApiRequest, NextApiResponse>({
			onError(error, req, res) {
				console.log("onError");
				console.trace(error);
				res.status(501).json({ err: `${error.message}` });
			},
			onNoMatch(req, res) {
				console.log("onNoMatch");
				res.writeHead(405);
			},
		});
	}
}

export default _nextConnect;
