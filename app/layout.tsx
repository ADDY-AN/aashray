import type { Metadata } from "next";
// Next.js 15 uses Geist by default. We map it to '--font-sans' for Shadcn.
import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils"; // Required for Shadcn style merging
import "./globals.css";
import { Toaster } from "sonner"; // ✅ Import Toaster

const geistSans = Geist({
    variable: "--font-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Aashray Superspeciality Hospital",
        template: "%s | Aashray Hospital",
    },
    description: "We deliver professional, world-class heart treatments and superspeciality care at affordable prices.",
    keywords: ["Hospital", "Cardiology", "Nephrology", "Dialysis", "Muzaffarpur", "Aashray"],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased",
                geistSans.variable,
                geistMono.variable
            )}
        >
        {/* 1. The Main App Content */}
        {children}

        {/* 2. The Toast Notification System (Required for Sonner) */}
        <Toaster position="top-center" richColors />
        </body>
        </html>
    );
}