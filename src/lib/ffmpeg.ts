import { FFmpeg } from '@ffmpeg/ffmpeg';

import coreURL from '../ffmpeg/ffmpeg-core.js?url' //?url is for the file to imported when it's ready to be used
import wasmURL from '../ffmpeg/ffmpeg-core.wasm?url' //?url w
import workerURL from '../ffmpeg/ffmpeg-worker.js?url' //?url w

let ffmpeg: FFmpeg | null

export async function getFFmpeg() {
  if (ffmpeg) {
    return ffmpeg;
  }

  ffmpeg = new FFmpeg();

  if (!ffmpeg.loaded) {
    await ffmpeg.load({
      coreURL,
      wasmURL,
      workerURL
    });
  }

  return ffmpeg;
}
