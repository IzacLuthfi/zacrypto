import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Calculator, BookOpen, History, FunctionSquare, Binary, Grid3X3 } from 'lucide-react'

export default function PlayfairMaterialPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F1F5F9] pb-20">
      
      <div className="border-b border-slate-800 bg-[#0F172A]/50 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/materials" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Modul
          </Link>
          <Link href="/calculator/playfair">
            <Button variant="outline" size="sm" className="border-slate-700 bg-transparent hover:bg-[#10B981]/10 text-[#10B981] flex items-center gap-2">
              <Calculator className="w-4 h-4" /> <span className="hidden sm:inline">Coba Kalkulator</span>
            </Button>
          </Link>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 pt-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium">
            <Grid3X3 className="w-4 h-4 text-[#10B981]" />
            <span className="text-slate-300">Modul Pembelajaran</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#10B981]">Playfair Cipher</h1>
          <p className="text-xl text-slate-400">Enkripsi Digrafik Medan Perang</p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#1E293B] border-[#10B981]/30 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#F1F5F9]">
                  <History className="w-5 h-5 text-[#10B981]" /> Sejarah Singkat
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400 leading-relaxed">
                Diciptakan oleh Charles Wheatstone pada 1854, namun dinamai dari Lord Playfair yang mempromosikannya. Sandi ini menjadi andalan militer Inggris pada Perang Dunia I karena cepat dihitung dengan tangan dan tidak memerlukan mesin khusus di medan perang.
              </CardContent>
            </Card>

            <Card className="bg-[#1E293B] border-[#10B981]/30 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#F1F5F9]">
                  <BookOpen className="w-5 h-5 text-[#10B981]" /> Konsep Dasar
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400 leading-relaxed">
                Sandi ini tidak mengenkripsi huruf satu per satu, melainkan berpasangan (digraf) menggunakan tabel bujursangkar berukuran 5x5 yang berisi 25 huruf alfabet (huruf J disatukan dengan I).
              </CardContent>
            </Card>
          </div>

          <Card className="bg-[#1E293B] border-[#10B981]/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#F1F5F9]">
                <FunctionSquare className="w-5 h-5 text-[#10B981]" /> Rumus & Aturan Matriks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0F172A] p-4 rounded-lg border border-slate-800">
                  <p className="text-sm text-slate-500 font-semibold mb-2 uppercase tracking-wider">Aturan Enkripsi</p>
                  <ul className="list-disc list-inside text-sm text-[#10B981] space-y-1">
                    <li>Sebaris: Geser ke kanan</li>
                    <li>Sekolom: Geser ke bawah</li>
                    <li>Berbeda: Bentuk bujur sangkar, ambil sudut berlawanan horizontal</li>
                  </ul>
                </div>
                <div className="bg-[#0F172A] p-4 rounded-lg border border-slate-800">
                  <p className="text-sm text-slate-500 font-semibold mb-2 uppercase tracking-wider">Aturan Dekripsi</p>
                  <ul className="list-disc list-inside text-sm text-[#10B981] space-y-1">
                    <li>Sebaris: Geser ke kiri</li>
                    <li>Sekolom: Geser ke atas</li>
                    <li>Berbeda: Sama dengan aturan enkripsi</li>
                  </ul>
                </div>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50 flex gap-3 items-start">
                <Binary className="w-5 h-5 mt-0.5 shrink-0 text-[#10B981]" />
                <p className="text-sm text-slate-400 leading-relaxed">
                  <span className="font-semibold text-slate-300">Catatan Tabel:</span> Jika teks asli memiliki huruf berpasangan yang sama (misal 'LL'), harus disisipkan huruf dummy 'X' di antaranya menjadi 'LX' dan 'L...'.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 mb-8 text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 to-transparent py-12 rounded-3xl border border-slate-800/50">
          <h3 className="text-2xl font-bold mb-4 text-[#F1F5F9]">Siap memecahkan kodenya?</h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">Uji coba algoritma matriks Playfair secara real-time.</p>
          <Link href="/calculator/playfair">
            <Button className="h-12 px-8 font-bold shadow-lg transition-all text-[#F1F5F9] bg-[#10B981] hover:bg-[#10B981]/80">
              <Calculator className="w-5 h-5 mr-2" /> Buka Kalkulator Playfair
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}