import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import Link from "next/link";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Online Shopping Store",
  description:
    "Best online Shopping store Discover the best products with amazing deals. Shop now!",
};

export default function RootLayout({ children }) {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  return (
    <html lang="en">
      <Head>
        <title>Online Shopping Store</title>
        <meta
          name="description"
          content={`Best online Shopping store Discover the best products with amazing deals. Shop now!`}
        />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <Link
              href={`/`}
              className="btn btn-ghost btn-soft btn-block text-xl"
            >
              Our Store
            </Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li className="">
                <Link
                  href={`/products/new`}
                  className="btn btn-soft btn-primary px-4"
                >
                  Create
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
