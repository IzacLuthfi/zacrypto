import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Calculator, BookOpen, History, FunctionSquare, Binary, Cpu } from 'lucide-react'

export default function EnigmaMaterialPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F1F5F9] pb-20">
      
      <div className="border-b border-slate-800 bg-[#0F172A]/50 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/materials" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Modul
          </Link>
          <Link href="/calculator/enigma">
            <Button variant="outline" size="sm" className="border-slate-700 bg-transparent hover:bg-amber-400/10 text-amber-400 flex items-center gap-2">
              <Calculator className="w-4 h-4" /> <span className="hidden sm:inline">Coba Kalkulator</span>
            </Button>
          </Link>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 pt-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium">
            <Cpu className="w-4 h-4 text-amber-400" />
            <span className="text-slate-300">Modul Pembelajaran</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Mesin Enigma</h1>
          <p className="text-xl text-slate-400">Mesin Sandi Perang Dunia II</p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#1E293B] border-amber-400/30 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#F1F5F9]">
                  <History className="w-5 h-5 text-amber-400" /> Sejarah Singkat
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400 leading-relaxed">
                Mesin elektromekanis yang digunakan tentara Jerman Nazi untuk mengenkripsi komunikasi militer super rahasia. Keberhasilan Alan Turing dan tim peretas sandi Sekutu di Bletchley Park dalam memecahkan Enigma diperkirakan memperpendek Perang Dunia II hingga 2 tahun.
              </CardContent>
            </Card>

            <Card className="bg-[#1E293B] border-amber-400/30 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#F1F5F9]">
                  <BookOpen className="w-5 h-5 text-amber-400" /> Konsep Dasar
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400 leading-relaxed">
                Menggunakan serangkaian roda gigi (rotor), reflektor, dan papan colok listrik (plugboard). Setiap kali satu huruf ditekan, rotor akan berputar satu klik, merubah total seluruh sirkuit pengabelan mesin secara dinamis setiap detiknya.
              </CardContent>
            </Card>
          </div>

          <Card className="bg-[#1E293B] border-amber-400/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#F1F5F9]">
                <FunctionSquare className="w-5 h-5 text-amber-400" /> Model Matematis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-[#0F172A] p-4 rounded-lg border border-slate-800 text-center">
                  <p className="text-sm text-slate-500 font-semibold mb-2 uppercase tracking-wider">Fungsi Transformasi Enigma</p>
                  <p className="font-mono text-xl font-bold tracking-widest text-amber-400">E = P R L M R L^-1 P</p>
                </div>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50 flex gap-3 items-start">
                <Binary className="w-5 h-5 mt-0.5 shrink-0 text-amber-400" />
                <p className="text-sm text-slate-400 leading-relaxed">
                  <span className="font-semibold text-slate-300">Catatan Matematis:</span> <br />
                  P = Plugboard (Papan Colok)<br/>
                  R = Right Rotor (Rotor Kanan berputar paling cepat)<br/>
                  M = Middle Rotor<br/>
                  L = Left Rotor<br/>
                  Total kombinasi keamanannya mencapai ~158 Kuintiliun kemungkinan.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 mb-8 text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 to-transparent py-12 rounded-3xl border border-slate-800/50">
          <h3 className="text-2xl font-bold mb-4 text-[#F1F5F9]">Penasaran dengan alat Alan Turing?</h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">Kami mensimulasikan gerak rotor mekanis Enigma ke dalam baris kode kalkulator ini.</p>
          <Link href="/calculator/enigma">
            <Button className="h-12 px-8 font-bold shadow-lg transition-all text-[#F1F5F9] bg-amber-500 hover:bg-amber-600 text-black">
              <Calculator className="w-5 h-5 mr-2" /> Buka Simulator Enigma
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}