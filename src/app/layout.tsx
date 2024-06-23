import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
const montserrat = Montserrat({
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

import { AuthProvider } from "@/components/providers/auth-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
export const metadata: Metadata = {
  // TODO put your title, description, and path to your app's icon
  // this is what will show in the tab on the browser
  title: "SaaS Boilerplate",
  description: "This is a SaaS boilerplate built with Next.js and Prisma.",
  icons: ["/your-icon.png"],
};
import NavigationBar from "@/components/NavigationBar";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/providers/theme-provider";
export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AuthProvider>
        <body
          className={cn(
            "relative h-full font-sans antialiased",
            inter.className
          )}
        >
          {/* Make sure default theme is confugured to what you want. For me, dark is the default */}
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <main className="relative flex flex-col min-h-screen">
              {/* TODO change this loader to be whatever color you want */}
              {/* Feel free to use a different loader, I downloaded NextTopLoader which I think is a very clean solution */}
              <NextTopLoader
                color="#2563eb"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={true}
                easing="ease"
                speed={200}
                shadow="0 0 10px #2563eb,0 0 5px #2563eb"
                template='<div class="bar" role="bar"><div class="peg"></div></div> '
                zIndex={1600}
                showAtBottom={false}
              />
              <NavigationBar />
              <div className="flex-grow flex-1">{children}</div>
              <Footer />
            </main>
            <Toaster />
          </ThemeProvider>
        </body>
      </AuthProvider>
    </html>
  );
}
