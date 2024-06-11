import * as chokidar from "chokidar";
import * as path from "path";
import * as readline from "readline";
import { compressImage } from "./image-compressor";

const watchers: chokidar.FSWatcher[] = [];

// Directories to watch for new PNG files
// Add/remove directories to watch for new PNG files
const watchDirectories = [
	"../Physics/content-images",
	"../Physics/question-images",
	"../Physics/module-exams",
	"../Physics/test-images-compression",
];

watchDirectories.forEach((directory) => {
	const watcher = chokidar.watch(directory, {
		persistent: true,
		ignoreInitial: true,
		awaitWriteFinish: {
			stabilityThreshold: 2000,
			pollInterval: 100,
		},
		depth: 99, // Recursively watch all subdirectories, you can adjust the depth level if needed
	});

	watcher.on("add", (filePath: string) => {
		if (path.extname(filePath).toLowerCase() === ".png") {
			console.log(`New PNG file added: ${filePath}`);
			compressImage(filePath);
		}
	});

	console.log(
		`Watching for new PNG files in ${directory} and its subdirectories...`
	);
	watchers.push(watcher);
});

// Setup for stopping the watchers
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

rl.on("line", (input) => {
	if (input.trim().toLowerCase() === "exit") {
		Promise.all(watchers.map((watcher) => watcher.close())).then(() => {
			console.log("All watchers stopped.");
			process.exit(0);
		});
	}
});

console.log('Type "exit" to stop the watchers.');
