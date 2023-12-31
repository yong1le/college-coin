import "./globals.css";
import { Poppins } from "next/font/google";

const font = Poppins({ subsets: ["latin"], weight: ["300", "600"] });

export const metadata = {
  title: "College Coin",
  description: "Making loan hunting easier for students",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} bg-gradient-to-r from-orange-100 to-amber-100`}
      >
        {children}
      </body>
    </html>
  );
}
