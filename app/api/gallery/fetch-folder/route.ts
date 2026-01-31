import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
    try {
        // 1. Search for Images
        const imageSearch = cloudinary.search
            .expression('resource_type:image')
            .sort_by('created_at', 'desc')
            .max_results(30)
            .execute();

        // 2. Search for Videos
        const videoSearch = cloudinary.search
            .expression('resource_type:video')
            .sort_by('created_at', 'desc')
            .max_results(10)
            .execute();

        const [images, videos] = await Promise.all([imageSearch, videoSearch]);

        const allResources = [...images.resources, ...videos.resources];

        // Sort by date
        allResources.sort((a: any, b: any) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );

        const items = allResources.map((file: any) => ({
            id: file.public_id,
            title: formatTitle(file.filename),
            type: file.resource_type.toUpperCase(),
            // ✅ FORCE HTTPS HERE
            url: file.secure_url,
            category: "Gallery"
        }));

        return NextResponse.json(items);

    } catch (error) {
        console.error("Cloudinary Fetch Error:", error);
        return NextResponse.json({ error: "Failed to load media" }, { status: 500 });
    }
}

function formatTitle(filename: string) {
    if (!filename) return "Untitled";
    return filename.replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}