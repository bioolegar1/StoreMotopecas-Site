// app/layout.js

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Store Motopeças",
    description: "Oficina especializada em motos de todas as cilindradas.",
    icons: {
        icon: '/store-motopeças-logo.png',
    },
};

// app/layout.js
export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body className={inter.className}>{children}</body>
        </html>
    );
}