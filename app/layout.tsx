import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu primeiro site",
  description: "Aprendendo Next.js, Tailwind e daisyUI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" data-theme="dark">
      <body className="font-sans">{children}</body>
    </html>
  );
}
