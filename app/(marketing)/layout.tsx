// ✅ Correct Import Syntax based on your file definitions:
import { Navbar } from "@/components/layout/navbar"; // Named import { Navbar }
import Footer from "@/components/layout/footer";     // Default import (No curly braces)

export default function MarketingLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen flex-col">
            <Navbar />

            {/* flex-1 ensures the footer is pushed to the bottom even on short pages */}
            <main className="flex-1">
                {children}
            </main>

            <Footer />
        </div>
    );
}