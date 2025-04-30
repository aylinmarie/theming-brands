import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import { ThemeBody } from "../components/ThemeBody";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "Theme Brands",
  description: "A demo of theme switching functionality.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <ThemeProvider>
          <ThemeBody>
            {children}
          </ThemeBody>
        </ThemeProvider>
      </Providers>
    </html>
  );
}
