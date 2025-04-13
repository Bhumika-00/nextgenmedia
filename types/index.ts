export interface Video {
    id: string;
    title: string;
    description: string | null; // <-- Fix here
    publicId: string;
    originalSize: number;
    compressedSize: number;
    duration: number;
    createdAt: Date;
    updatedAt: Date;
  }
  