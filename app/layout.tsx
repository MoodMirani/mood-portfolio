import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import Navbar from "@/components/layout/navbar";

export const metadata = {
  title: "Mahmoud Mirani's portfolio",
  description: "Welcome to my personal portfolio.",
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cx(sfPro.variable, inter.variable)}
        style={{ backgroundColor: "rgb(250, 250, 250)" }}
      >
        <Suspense fallback="...">
          <Navbar />
        </Suspense>
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
