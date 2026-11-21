// gta6-clipper-01 slot 3 entrypoint.
// Reads VIDEO.json out of the bot folder, checks that it really names a
// public YouTube Short, and copies it into the output folder where the
// house gate picks it up. No network calls anywhere in here.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourceFile = botDir + '/VIDEO.json';
const destFile = outDir + '/VIDEO.json';

if (!existsSync(sourceFile)) {
  console.error('clipper entry: no VIDEO.json found in ' + botDir);
  process.exit(1);
}

let rawText;
try {
  rawText = readFileSync(sourceFile, 'utf8');
} catch (err) {
  console.error('clipper entry: could not read ' + sourceFile + ': ' + err.message);
  process.exit(1);
}

let parsed;
try {
  parsed = JSON.parse(rawText);
} catch (err) {
  console.error('clipper entry: VIDEO.json is not valid JSON: ' + err.message);
  process.exit(1);
}

const videoUrl = parsed && parsed.url;

// A Shorts watch page, or the short youtu.be share link. The id part is the
// 11-character YouTube video id; the pattern stays loose on length so a
// future id shape is not rejected for the wrong reason.
const shortsPage = /^https:\/\/(www\.)?youtube\.com\/shorts\/[A-Za-z0-9_-]{6,}(\?.*)?$/;
const shortShare = /^https:\/\/youtu\.be\/[A-Za-z0-9_-]{6,}(\?.*)?$/;

if (typeof videoUrl !== 'string' || (!shortsPage.test(videoUrl) && !shortShare.test(videoUrl))) {
  console.error('clipper entry: VIDEO.json "url" must be a YouTube Shorts link, got: ' + JSON.stringify(videoUrl));
  process.exit(1);
}

// A youtu.be share link points at the same video, but the gate reads the
// canonical Shorts address, so rewrite it before writing the output. When the
// url is already canonical the file goes out untouched, byte for byte.
let payload = rawText;
const shareMatch = videoUrl.match(/^https:\/\/youtu\.be\/([A-Za-z0-9_-]{6,})/);
if (shareMatch) {
  const canonical = 'https://youtube.com/shorts/' + shareMatch[1];
  payload = JSON.stringify({ ...parsed, url: canonical }, null, 2) + '\n';
  console.log('clipper entry: normalised youtu.be link to ' + canonical);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(destFile, payload);
console.log('clipper entry: VIDEO.json written to ' + destFile);
