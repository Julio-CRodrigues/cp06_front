import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PORTFÓLIO FIAP",
  description: "portfólio do projeto de avaliações de front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className="bg-gray-900"
      >
        {children}
      </body>
    </html>
  );
}
