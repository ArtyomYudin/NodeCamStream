// const Stream = require('node-rtsp-stream');
const https = require('https');
const constants = require('crypto');
const fs = require('fs');
const Stream = require('./videoStream');

const streamUrl = 'rtsp://video:123456@172.20.58.23:7070';
const streamUrl1 = 'rtsp://video:123456@172.20.58.24:7070';
const streamUrl2 = 'rtsp://video:123456@172.20.58.28:7070';
const streamUrl3 = 'rtsp://video:123456@172.20.58.29:7070';

const options = {
  key: fs.readFileSync('./cert/center_inform.key'),
  cert: fs.readFileSync('./cert/center_inform.crt'),
  requestCert: false,
  // secureProtocol: 'SSLv23_method',
  secureOptions: constants.SSL_OP_NO_SSLv3 || constants.SSL_OP_NO_SSLv2,
};

const httpsServerMainCam = https
  .createServer(options, (request, response) => {
    if (request.method === 'OPTIONS') {
      // response.writeHead(204, headers);
      response.end();
    }
  })
  .listen('9999', 'it.center-inform.ru', () => {});

const httpsServerBackCam = https
  .createServer(options, (request, response) => {
    if (request.method === 'OPTIONS') {
      // response.writeHead(204, headers);
      response.end();
    }
  })
  .listen('9996', 'it.center-inform.ru', () => {});

const httpsServerServerRoom1 = https
  .createServer(options, (request, response) => {
    if (request.method === 'OPTIONS') {
      // response.writeHead(204, headers);
      response.end();
    }
  })
  .listen('9997', 'it.center-inform.ru', () => {});

const httpsServerServerRoom2 = https
  .createServer(options, (request, response) => {
    if (request.method === 'OPTIONS') {
      // response.writeHead(204, headers);
      response.end();
    }
  })
  .listen('9998', 'it.center-inform.ru', () => {});

const stream = new Stream({
  name: 'ACTi_stream',
  streamUrl,
  wsHost: 'it.center-inform.ru',
  wsServer: httpsServerMainCam,
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
  wsHost: 'it.center-inform.ru',
  wsServer: httpsServerServerRoom1,
  // wsPort: 9997,
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
  wsHost: 'it.center-inform.ru',
  wsServer: httpsServerServerRoom2,
  // wsPort: 9998,
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

const stream3 = new Stream({
  name: 'ACTi_stream_back',
  streamUrl: streamUrl3,
  wsHost: 'it.center-inform.ru',
  wsServer: httpsServerBackCam,
  // wsPort: 9996,
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
