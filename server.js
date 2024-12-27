const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.post('/download', async (req, res) => {
  const { url, platform } = req.body;

  if (!url || !platform) {
    return res.status(400).send('URL and platform are required');
  }

  try {
    // Validate that the URL is publicly accessible
    const response = await axios.get(url);
    if (response.status !== 200) {
      return res.status(400).send('Invalid or inaccessible URL');
    }

    // Generate unique file name for the downloaded media
    const outputFileName = `${platform}_media_${Date.now()}.mp4`;
    const outputPath = path.join(__dirname, outputFileName);

    // Command based on platform
    const downloadCommand =
      platform === 'reddit'
        ? `yt-dlp -f "bestvideo+bestaudio[ext=m4a]" --merge-output-format mp4 -o "${outputPath}" ${url}`
        : `yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]" --merge-output-format mp4 -o "${outputPath}" ${url}`;

    // Use yt-dlp to download media
    exec(downloadCommand, (error, stdout, stderr) => {
      if (error) {
        console.error('Error downloading media:', stderr);
        return res.status(500).send('Error downloading media');
      }

      console.log('Media downloaded successfully:', stdout);

      // Send the file for download
      res.download(outputPath, outputFileName, (err) => {
        if (err) {
          console.error('Error sending file:', err);
        }

        // Clean up the file after sending
        fs.unlink(outputPath, (unlinkErr) => {
          if (unlinkErr) {
            console.error('Error deleting file:', unlinkErr);
          }
        });
      });
    });
  } catch (error) {
    console.error('Error validating URL:', error);
    res.status(400).send('Could not access the provided URL. Ensure it is a public video URL.');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  