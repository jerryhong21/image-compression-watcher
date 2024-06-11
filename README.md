# PNG Watcher and Compressor

This project watches specified directories for new PNG files, compresses them using the TinyPNG API, and replaces the original files with the compressed versions. It is built using TypeScript and Node.js, leveraging the `chokidar` library for file system watching and the `tinify` library for image compression.

## Features

-   Watches multiple directories and their subdirectories for new PNG files.
-   Compresses new PNG files using the TinyPNG API.
-   Replaces the original PNG files with the compressed versions.
-   Provides an easy way to start and stop the watcher.

## Prerequisites

-   Node.js (v14 or higher)
-   npm (v6 or higher)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/yourrepository.git
cd yourrepository
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory of the project and add your TinyPNG API key:

```plaintext
TINIFY_API_KEY=YOUR_TINYPNG_API_KEY
```

### 4. Create the Watcher Script

Create a `start-watcher.sh` script in the root directory of the project with the following content:

```bash
#!/bin/bash
cd "$(dirname "$0")"
npm run start-watcher
```

Make the script executable:

```bash
chmod +x start-watcher.sh
```

### 5. Update package.json

Ensure your `package.json` includes the `start-watcher` script:

```json
{
	"name": "your-project-name",
	"version": "1.0.0",
	"main": "index.js",
	"scripts": {
		"start-watcher": "ts-node ./path/to/watcher.ts"
	},
	"dependencies": {
		"chokidar": "^3.5.3",
		"dotenv": "^10.0.0",
		"fs-extra": "^10.0.0",
		"tinify": "^1.6.0"
	},
	"devDependencies": {
		"ts-node": "^10.0.0",
		"typescript": "^4.3.5"
	}
}
```

### 6. Running the Watcher

You can run the watcher by executing the shell script:

```bash
./start-watcher.sh
```

Alternatively, you can use npm to start the watcher:

```bash
npm run start-watcher
```

### 7. Creating a Desktop Shortcut (Optional)

**On Linux/macOS:**

1. Navigate to your Desktop:

    ```bash
    cd ~/Desktop
    ```

2. Create a symbolic link to the `start-watcher.sh` script:

    ```bash
    ln -s /path/to/your/project/start-watcher.sh start-watcher
    ```

## Usage

Once the watcher is running, it will automatically compress any new PNG files added to the specified directories and replace the original files with the compressed versions.

## Stopping the Watcher

To stop the watcher, type `exit` in the terminal where the watcher is running and press `Enter`.

## Contributing

Feel free to submit issues and pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
