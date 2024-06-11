// to run: npx ts-node src/image-compressor.ts in the terminal

import * as chokidar from "chokidar";
import * as path from "path";
import * as readline from "readline";
import tinify from "tinify";
import dotenv from "dotenv";

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, "../.env.local") });


if (!process.env.TINIFIY_API_KEY) {
	throw new Error("Please set the TINIFIY_API_KEY environment variable.");
}
tinify.key = process.env.TINIFIY_API_KEY;

export const compressImage = async (filePath: string) => {
	try {
		const source = tinify.fromFile(filePath);
		await source.toFile(filePath);
		console.log(`Compressed and replaced: ${filePath}`);
	} catch (error) {
		console.error(`Failed to compress ${filePath}:`, error);
	}
};
