import multer from "multer";
import { MAX_CONTENT_FILE_SIZE, MAX_NUMBER_FILE } from "../utils/settings/setting";
import os from "os";

export default (fileFromName: string) => {
	const uploadDirectory = os.tmpdir();
	return multer({
		limits: {
			fileSize: MAX_CONTENT_FILE_SIZE,
			files: MAX_NUMBER_FILE,
		},
		storage: multer.diskStorage({
			destination: (req, file, cb) => {
				cb(null, uploadDirectory);
			},
			filename: (req, file, cb) => {
				cb(null, file.originalname);
			},
		}),
	}).array(fileFromName);
};
