declare module 'gif-encoder-2' {
  class GIFEncoder {
    constructor(width: number, height: number, algorithm?: 'neuquant' | 'octree', useOptimizer?: boolean);
    setDelay(ms: number): void;
    setQuality(quality: number): void;
    setRepeat(repeat: number): void;
    start(): void;
    addFrame(data: Buffer | Uint8Array): void;
    finish(): void;
    out: { getData(): Buffer };
  }
  export default GIFEncoder;
}
