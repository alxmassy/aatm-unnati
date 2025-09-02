// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header'; // <-- IMPORT THE HEADER
import { ChatbotBar } from '@/components/ChatbotBar';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aatm-Unnati',
  description: 'Aadhaar Seeding Awareness Portal',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {/* <-- ADD THE HEADER HERE */}
        <main className="container mx-auto px-6 py-8">
          {children}
        </main>
        <ChatbotBar />
      </body>
    </html>
  );
}