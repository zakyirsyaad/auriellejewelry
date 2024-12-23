import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Aurielle Jewelry",
  description: "Top 1 best online store titanium jewelry in the world!",
  keywords: ["Auriell Jewelry", "Aurielle Jewelry", "Online Store Jewelry", "Perhiasan Murah", "Perhiasan Terbaik", "Perhiasan Terbaik Indonesia"],
  openGraph: {
    title: "Aurielle Jewelry",
    description: "Top 1 best online store titanium jewelry in the world!",
    images: "https://kowtddhwakkqmlntjbws.supabase.co/storage/v1/object/public/My/favicon.png", // Gantilah dengan URL gambar yang sesuai
    url: "https://auriellejewelry.store" // Gantilah dengan URL halaman Anda
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
