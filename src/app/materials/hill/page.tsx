import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Calculator, BookOpen, History, FunctionSquare, Binary } from 'lucide-react'

export default function HillMaterialPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F1F5F9] pb-20">
      
      <div className="border-b border-slate-800 bg-[#0F172A]/50 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/materials" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Modul
          </Link>
          <Link href="/calculator/hill">
            <Button variant="outline" size="sm" className="border-slate-700 bg-transparent hover:bg-purple-400/10 text-purple-400 flex items-center gap-2">
              <Calculator className="w-4 h-4" /> <span className="hidden sm:inline">Coba Kalkulator</span>
            </Button>
          </Link>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 pt-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium">
            <Binary className="w-4 h-4 text-purple-400" />
            <span className="text-slate-300">Modul Pembelajaran</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400">Hill Cipher</h1>
          <p className="text-xl text-slate-400">Kriptografi Berbasis Aljabar Linear</p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#1E293B] border-purple-400/30 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#F1F5F9]">
                  <History className="w-5 h-5 text-purple-400" /> Sejarah Singkat
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400 leading-relaxed">
                Diciptakan oleh matematikawan Lester S. Hill pada tahun 1929. Ini adalah sandi pertama yang benar-benar menerapkan aljabar linear dan perhitungan matriks ke dalam kriptografi, membuka jalan bagi sistem kriptografi modern yang kompleks.
              </CardContent>
            </Card>

            <Card className="bg-[#1E293B] border-purple-400/30 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#F1F5F9]">
                  <BookOpen className="w-5 h-5 text-purple-400" /> Konsep Dasar
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400 leading-relaxed">
                Hill Cipher mengenkripsi sekelompok huruf (vektor) sekaligus menggunakan perkalian matriks. Kunci enkripsinya adalah matriks persegi, dan untuk bisa didekripsi, matriks kunci ini harus memiliki invers (determinannya bukan nol dan relatif prima terhadap 26).
              </CardContent>
            </Card>
          </div>

          <Card className="bg-[#1E293B] border-purple-400/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#F1F5F9]">
                <FunctionSquare className="w-5 h-5 text-purple-400" /> Rumus Matematika
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0F172A] p-4 rounded-lg border border-slate-800">
                  <p className="text-sm text-slate-500 font-semibold mb-2 uppercase tracking-wider">Enkripsi</p>
                  <p className="font-mono text-lg font-bold tracking-widest text-purple-400">C = (K * P) mod 26</p>
                </div>
                <div className="bg-[#0F172A] p-4 rounded-lg border border-slate-800">
                  <p className="text-sm text-slate-500 font-semibold mb-2 uppercase tracking-wider">Dekripsi</p>
                  <p className="font-mono text-lg font-bold tracking-widest text-purple-400">P = (K^-1 * C) mod 26</p>
                </div>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50 flex gap-3 items-start">
                <Binary className="w-5 h-5 mt-0.5 shrink-0 text-purple-400" />
                <p className="text-sm text-slate-400 leading-relaxed">
                  <span className="font-semibold text-slate-300">Catatan Matematis:</span> K = Matriks Kunci, P = Vektor kolom Plaintext, K^-1 = Matriks invers dari K. Membutuhkan perhitungan modulo invers untuk mencari determinan pembagi.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 mb-8 text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 to-transparent py-12 rounded-3xl border border-slate-800/50">
          <h3 className="text-2xl font-bold mb-4 text-[#F1F5F9]">Pusing menghitung matriks?</h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">Biarkan kalkulator kami yang melakukan perkalian aljabar linearnya.</p>
          <Link href="/calculator/hill">
            <Button className="h-12 px-8 font-bold shadow-lg transition-all text-[#F1F5F9] bg-purple-500 hover:bg-purple-600">
              <Calculator className="w-5 h-5 mr-2" /> Buka Kalkulator Hill
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}