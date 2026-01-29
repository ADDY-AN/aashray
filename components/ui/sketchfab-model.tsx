"use client";

interface SketchfabModelProps {
    uid: string;
    title?: string;
}

export function SketchfabModel({ uid, title = "3D Model" }: SketchfabModelProps) {
    return (
        <div className="sketchfab-embed-wrapper w-full h-full min-h-[300px] relative border border-white/10 bg-black/20 overflow-hidden group">
            {/* Decorative Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-brand-neon z-10"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-brand-neon z-10"></div>

            <iframe
                title={title}
                className="w-full h-full absolute inset-0 focus:outline-none"
                frameBorder="0"
                allowFullScreen
                // Standard React attribute for "allow"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src={`https://sketchfab.com/models/${uid}/embed?autostart=1&ui_theme=dark&dnt=1`}
                // We spread these specific non-standard attributes as 'any' to bypass TS checks
                {...({
                    "mozallowfullscreen": "true",
                    "webkitallowfullscreen": "true",
                    "xr-spatial-tracking": "true",
                    "execution-while-out-of-viewport": "true",
                    "execution-while-not-rendered": "true",
                    "web-share": "true"
                } as any)}
            >
            </iframe>

            {/* Overlay to prevent scroll capturing */}
            <div className="absolute inset-0 pointer-events-none border-4 border-transparent group-hover:border-brand-neon/20 transition-colors"></div>
        </div>
    );
}