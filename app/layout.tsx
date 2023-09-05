import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "@/app/providers";
import Navbar from "@/components/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizmify",
  description: "Quiz yourself on anything!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen pt-16")}>
        <Providers>
          <Navbar />
          <ToastContainer
        position="bottom-right"
        autoClose={500}
        hideProgressBar={true}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
      />
          {children}
        </Providers>
      </body>
    </html>
  );
}
