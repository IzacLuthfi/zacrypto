import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar' // Mengimpor Navbar

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zacrypto',
  description: 'Platform Belajar Kriptografi Klasik & Modern',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      {/* Menambahkan bg-[#0F172A] agar warna dasar web konsisten gelap */}
      <body className={`${inter.className} bg-[#0F172A] min-h-screen flex flex-col text-slate-100`}>
        
        {/* Navbar akan selalu muncul di paling atas pada setiap halaman */}
        <Navbar />
        
        {/* Main content area */}
        <main className="flex-1">
          {children}
        </main>

      </body>
    </html>
  )
}