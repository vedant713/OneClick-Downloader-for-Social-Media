
# Social Media Video Downloader

Social Media Video Downloader is a web-based application that allows users to download videos from popular social media platforms like YouTube, Instagram, and Reddit. It provides a simple and intuitive interface for users to select a platform, paste the video URL, and download videos directly to their devices.

## Features

- **Platform Support**: Download videos from YouTube, Instagram, and Reddit.
- **Responsive UI**: Galaxy-themed, modern, and responsive interface for an engaging user experience.
- **Dynamic Platform Selector**: Platform-specific URL placeholders and button highlighting.
- **Server Integration**: Backend powered by Node.js and `yt-dlp` for downloading videos.
- **Download Options**: Merges video and audio streams for high-quality downloads.
- **Error Handling**: Validates video URLs and provides feedback for invalid or inaccessible links.
- **Cross-Origin Support**: Configured to handle cross-origin requests using CORS.

## Technologies Used

- **Frontend**: 
  - HTML5, CSS3 (Galaxy-themed animations and effects)
  - JavaScript for dynamic interactions
- **Backend**: 
  - Node.js with Express for handling download requests
  - `yt-dlp` for video downloads
  - Axios for URL validation
- **Miscellaneous**:
  - Body-parser for request parsing
  - File system (`fs`) for file management

## How It Works

1. **Select a Platform**: Choose a social media platform (YouTube, Instagram, or Reddit) via the platform selector.
2. **Enter Video URL**: Paste the URL of the video you wish to download.
3. **Download**: Click "Download Video" to process the request. The server validates the URL, downloads the video using `yt-dlp`, and provides it for download.
4. **File Cleanup**: The server automatically deletes temporary files after serving them to the user.

## Prerequisites

- Node.js and npm installed
- `yt-dlp` installed on the server

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/vedant713/OneClick-Downloader-for-Social-Media.git
   ```
2. Navigate to the project directory:
   ```bash
   cd OneClick-Downloader-for-Social-Media.git
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the server:
   ```bash
   node server.js
   ```
5. Open `index.html` in your browser or deploy the frontend to a web server.

## Notes

- Ensure `yt-dlp` is installed and accessible via the system's PATH.
- Replace `localhost` in the frontend script with your server's address if deployed remotely.

## Future Enhancements

- Support for additional platforms like TikTok, Facebook, etc.
- Progress bar for download status.
- User authentication for personalized downloads.
- Dockerization for easier deployment.

Feel free to contribute to this project by opening issues or submitting pull requests! 🌟
