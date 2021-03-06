const { app, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const ytdl = require('ytdl-core');
const ffmpegPath = require('ffmpeg-static').path;
const ffmpeg = require('fluent-ffmpeg');

fs.chmodSync(ffmpegPath, 0o775);
ffmpeg.setFfmpegPath(ffmpegPath);

ipcMain.on('download-video:start', function(event, youtubeUrl) {
  const downloadDirectory = app.getPath('downloads');
  const videoId = youtubeUrl.split("=")[1];

  ytdl.getInfo(videoId, function(err, info) {
    if (err) throw err;

    const title = info.title + '.mp3';

    const stream = ytdl.downloadFromInfo(info, {
      filter: 'audioonly'
    });

    ffmpeg(stream)
      .audioBitrate(128)
      .save(path.join(downloadDirectory, title))
      .on('progress', p => {
        event.reply('download-video:progress', p.targetSize);
      })
      .on('end', function() {
        event.reply('download-video:complete', path.join(downloadDirectory, title));
      });
  });
});
