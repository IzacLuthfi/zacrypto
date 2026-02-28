import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BookOpen, Calculator, Gamepad2, BrainCircuit, ShieldCheck, LockKeyhole } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F1F5F9] font-sans overflow-x-hidden relative">
      
      {/* --- HERO SECTION --- */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1E293B] via-[#0F172A] to-[#0F172A]">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0284C7]/20 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-8">
          
          {/* Logo sudah dihapus dari sini */}

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Kuasai Seni <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] via-[#0284C7] to-[#10B981]">
              Kriptografi Klasik & Modern
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl">
            Platform interaktif untuk mempelajari, mensimulasikan, dan memecahkan berbagai algoritma enkripsi rahasia dari era Caesar hingga mesin Enigma.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto z-10">
            <Link href="/calculator" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto h-12 px-8 bg-[#0284C7] hover:bg-[#0284C7]/80 text-[#F1F5F9] font-bold rounded-lg shadow-[0_4px_14px_0_rgba(2,132,199,0.39)] hover:shadow-[0_6px_20px_rgba(2,132,199,0.23)] transition-all flex items-center gap-2">
                <Calculator className="w-5 h-5" /> Coba Kalkulator Cipher
              </Button>
            </Link>
            <Link href="/materials" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto h-12 px-8 border-slate-700 bg-transparent hover:bg-slate-800 text-[#F1F5F9] font-bold rounded-lg transition-all flex items-center gap-2">
                <BookOpen className="w-5 h-5" /> Pelajari Materi
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* --- FITUR UTAMA SECTION --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Eksplorasi Fitur Zacrypto</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#14B8A6] to-[#0284C7] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/calculator" className="group">
            <Card className="h-full bg-[#1E293B] border-slate-700/50 hover:border-[#0284C7]/50 transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-black/20 group-hover:shadow-[#0284C7]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0284C7] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#0F172A] border border-slate-700 flex items-center justify-center mb-4 text-[#0284C7] group-hover:scale-110 transition-transform">
                  <LockKeyhole className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-[#F1F5F9]">Kalkulator Kripto</CardTitle>
                <CardDescription className="text-slate-400">
                  Enkripsi dan dekripsi pesanmu secara *real-time* menggunakan algoritma populer.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/materials" className="group">
            <Card className="h-full bg-[#1E293B] border-slate-700/50 hover:border-[#14B8A6]/50 transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-black/20 group-hover:shadow-[#14B8A6]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#14B8A6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#0F172A] border border-slate-700 flex items-center justify-center mb-4 text-[#14B8A6] group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-[#F1F5F9]">Modul Materi</CardTitle>
                <CardDescription className="text-slate-400">
                  Pelajari sejarah, teori matematika, dan cara kerja setiap algoritma *cipher*.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/quiz" className="group">
            <Card className="h-full bg-[#1E293B] border-slate-700/50 hover:border-[#10B981]/50 transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-black/20 group-hover:shadow-[#10B981]/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#10B981] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#0F172A] border border-slate-700 flex items-center justify-center mb-4 text-[#10B981] group-hover:scale-110 transition-transform">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-[#F1F5F9]">Kuis Interaktif</CardTitle>
                <CardDescription className="text-slate-400">
                  Uji pemahamanmu dengan berbagai soal latihan pemecahan kode rahasia.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link href="/minigames" className="group">
            <Card className="h-full bg-[#1E293B] border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-black/20 group-hover:shadow-purple-500/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[#0F172A] border border-slate-700 flex items-center justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl text-[#F1F5F9]">Mini Games</CardTitle>
                <CardDescription className="text-slate-400">
                  Asah logikamu dengan *puzzle* kriptografi dan pecahkan misteri *cyber*.
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        </div>
      </section>

      {/* --- FOOTER SIMPLE --- */}
      <footer className="border-t border-slate-800 bg-[#0F172A] py-8 text-center text-slate-500">
        <p className="flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4" />
          © {new Date().getFullYear()} Zacrypto. Developed for Cryptography Enthusiasts.
        </p>
      </footer>
      
    </div>
  )
}