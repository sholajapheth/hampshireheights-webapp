import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/UI/Footer";
import { Header } from "@/Components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hamsphire Height",
  description:
    "Hampshire Heights is a leading consulting firm specializing in IT Service Management, Operational Readiness, Business Transformation, Robot Process Automation, Artificial Intelligence, Programme and Project Management, and Solution Delivery for global multi-nationals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="absolute top-0 z-50 w-full">
          <Header />
        </div>
        <div className="mt-16">{children}</div>
      </body>
      <Footer />
    </html>
  );
}
