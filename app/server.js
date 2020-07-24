const Stream = require('node-rtsp-stream');

const streamUrl = 'rtsp://video:123456@172.20.58.23:7070';
const streamUrl1 = 'rtsp://video:123456@172.20.58.24:7070';
const streamUrl2 = 'rtsp://video:123456@172.20.58.28:7070';

const stream = new Stream({
  name: 'ACTi_stream',
  streamUrl,
  wsHost: '172.20.4.195',
  wsPort: 9999,
  // width: 640,
  // height: 480,
  ffmpegOptions: {
    // '-stats': '', // an option with no neccessary value uses a blank string
    '-f': 'mpegts',
    '-codec:v': 'mpeg1video',
    '-r': '25',
    // '-threads': '1',
    '-v': 'error',
    '-s': '640x480',
    '-b:v': '1000k',
    '-bf': '0',
  },
});

const stream1 = new Stream({
  name: 'ACTi_stream_SR1',
  streamUrl: streamUrl1,
  wsHost: '172.20.4.195',
  wsPort: 9997,
  // width: 640,
  // height: 480,
  ffmpegOptions: {
    // '-stats': '', // an option with no neccessary value uses a blank string.
    '-f': 'mpegts',
    '-codec:v': 'mpeg1video',
    '-r': '25',
    // '-threads': '1',
    '-v': 'error',
    '-s': '640x480',
    '-b:v': '1000k',
    '-bf': '0',
  },
});

const stream2 = new Stream({
  name: 'ACTi_stream_SR2',
  streamUrl: streamUrl2,
  wsHost: '172.20.4.195',
  wsPort: 9998,
  // width: 640,
  // height: 480,
  ffmpegOptions: {
    // '-stats': '', // an option with no neccessary value uses a blank string.
    '-f': 'mpegts',
    '-codec:v': 'mpeg1video',
    '-r': '25',
    // '-threads': '1',
    '-v': 'error',
    '-s': '640x480',
    '-b:v': '1000k',
    '-bf': '0',
  },
});
