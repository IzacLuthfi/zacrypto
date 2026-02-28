import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Calculator, BookOpen, BrainCircuit, Gamepad2, Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-[#0F172A]/80 backdrop-blur-md">
      {/* Tinggi navbar disesuaikan menjadi h-20 untuk menampung logo yg lebih besar dan menu card */}
      <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
        
        {/* LOGO DIPERBESAR 1.5x (dari w-48 h-12 menjadi w-72 h-16) */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <div className="relative w-82 h-26">
            <Image
              src="/zacrypto.png"
              alt="Zacrypto Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* MENU DESKTOP DENGAN GAYA CARD */}
        <div className="hidden md:flex items-center gap-3">
          
          {/* Card Materi */}
          <Link href="/materials" className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1E293B]/50 border border-slate-700/50 hover:border-[#14B8A6]/50 hover:bg-[#1E293B] hover:shadow-[0_4px_12px_rgba(20,184,166,0.1)] hover:-translate-y-0.5 transition-all">
            <BookOpen className="w-4 h-4 text-[#14B8A6]" />
            <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Materi</span>
          </Link>
          
          {/* Card Kalkulator */}
          <Link href="/calculator" className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1E293B]/50 border border-slate-700/50 hover:border-[#0284C7]/50 hover:bg-[#1E293B] hover:shadow-[0_4px_12px_rgba(2,132,199,0.1)] hover:-translate-y-0.5 transition-all">
            <Calculator className="w-4 h-4 text-[#0284C7]" />
            <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Kalkulator</span>
          </Link>
          
          {/* Card Kuis */}
          <Link href="/quiz" className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1E293B]/50 border border-slate-700/50 hover:border-[#10B981]/50 hover:bg-[#1E293B] hover:shadow-[0_4px_12px_rgba(16,185,129,0.1)] hover:-translate-y-0.5 transition-all">
            <BrainCircuit className="w-4 h-4 text-[#10B981]" />
            <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Kuis</span>
          </Link>
          
          {/* Card Minigames */}
          <Link href="/minigames" className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1E293B]/50 border border-slate-700/50 hover:border-purple-500/50 hover:bg-[#1E293B] hover:shadow-[0_4px_12px_rgba(168,85,247,0.1)] hover:-translate-y-0.5 transition-all">
            <Gamepad2 className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">Minigames</span>
          </Link>

        </div>

        {/* TOMBOL CALL TO ACTION */}
        {/* Disembunyikan di layar sedang (md) agar menu card tidak bertabrakan dengan logo, muncul lagi di layar besar (lg) */}
        <div className="hidden lg:flex items-center">
          <Link href="/calculator">
            <Button className="bg-[#0284C7] hover:bg-[#0284C7]/80 text-[#F1F5F9] font-bold shadow-[0_0_10px_rgba(2,132,199,0.3)] transition-all rounded-xl h-10 px-5">
              Mulai Enkripsi
            </Button>
          </Link>
        </div>

        {/* MENU MOBILE */}
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon" className="text-slate-300 hover:text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </div>

      </div>
    </nav>
  )
}