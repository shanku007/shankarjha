import { NextResponse } from 'next/server';
import { readdir } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    const imagesDirectory = join(process.cwd(), 'public', 'images', 'personal');
    const files = await readdir(imagesDirectory);
    
    // Filter only image files
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png|gif|webp|JPG|JPEG|PNG|GIF|WEBP)$/i.test(file)
    );
    
    // Sort files naturally (1.JPG, 2.JPG, etc.)
    const sortedImages = imageFiles.sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)?.[0] || '0');
      const numB = parseInt(b.match(/\d+/)?.[0] || '0');
      if (numA !== numB) return numA - numB;
      return a.localeCompare(b);
    });
    
    return NextResponse.json({ images: sortedImages });
  } catch (error) {
    console.error('Error reading images directory:', error);
    return NextResponse.json({ images: [] }, { status: 500 });
  }
}

