import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Calculator, BookOpen, History, FunctionSquare, Binary } from 'lucide-react'

export default function CaesarMaterialPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F1F5F9] pb-20">
      
      {/* HEADER BREADCRUMB */}
      <div className="border-b border-slate-800 bg-[#0F172A]/50 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/materials" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Modul
          </Link>
          
          <Link href="/calculator/caesar">
            <Button variant="outline" size="sm" className="border-slate-700 bg-transparent hover:bg-[#14B8A6]/10 text-[#14B8A6] flex items-center gap-2">
              <Calculator className="w-4 h-4" />
              <span className="hidden sm:inline">Coba Kalkulator</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* KONTEN UTAMA */}
      <main className="max-w-4xl mx-auto px-6 pt-12">
        
        {/* Judul */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium">
            <BookOpen className="w-4 h-4 text-[#14B8A6]" />
            <span className="text-slate-300">Modul Pembelajaran</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#14B8A6]">
            Caesar Cipher
          </h1>
          <p className="text-xl text-slate-400">
            Sandi Substitusi Paling Fundamental
          </p>
        </div>

        <div className="space-y-8">
          
          {/* Section: Sejarah & Konsep */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#1E293B] border-[#14B8A6]/30 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#F1F5F9]">
                  <History className="w-5 h-5 text-[#14B8A6]" />
                  Sejarah Singkat
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400 leading-relaxed">
                Caesar Cipher adalah salah satu teknik enkripsi paling awal dan paling sederhana yang diketahui. Dinamai dari Julius Caesar, jenderal dan diktator Romawi, yang dilaporkan menggunakannya dengan pergeseran 3 ke kiri untuk melindungi pesan militernya. Meskipun saat ini sangat mudah dipecahkan, pada zaman kuno, ini memberikan keamanan yang cukup karena sebagian besar musuh buta huruf.
              </CardContent>
            </Card>

            <Card className="bg-[#1E293B] border-[#14B8A6]/30 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#F1F5F9]">
                  <BookOpen className="w-5 h-5 text-[#14B8A6]" />
                  Konsep Dasar
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400 leading-relaxed">
                Teknik ini adalah jenis sandi substitusi monoalfabetik, di mana setiap huruf dalam teks asli (plaintext) diganti dengan huruf yang berada pada posisi tertentu yang digeser lebih jauh ke bawah atau ke atas dalam alfabet.
              </CardContent>
            </Card>
          </div>

          {/* Section: Rumus Matematika */}
          <Card className="bg-[#1E293B] border-[#14B8A6]/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#F1F5F9]">
                <FunctionSquare className="w-5 h-5 text-[#14B8A6]" />
                Rumus Matematika
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0F172A] p-4 rounded-lg border border-slate-800">
                  <p className="text-sm text-slate-500 font-semibold mb-2 uppercase tracking-wider">Enkripsi</p>
                  <p className="font-mono text-lg font-bold tracking-widest text-[#14B8A6]">C = (P + K) mod 26</p>
                </div>
                <div className="bg-[#0F172A] p-4 rounded-lg border border-slate-800">
                  <p className="text-sm text-slate-500 font-semibold mb-2 uppercase tracking-wider">Dekripsi</p>
                  <p className="font-mono text-lg font-bold tracking-widest text-[#14B8A6]">P = (C - K) mod 26</p>
                </div>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50 flex gap-3 items-start">
                <Binary className="w-5 h-5 mt-0.5 shrink-0 text-[#14B8A6]" />
                <p className="text-sm text-slate-400 leading-relaxed">
                  <span className="font-semibold text-slate-300">Catatan Matematis:</span> P = Plaintext (A=0, B=1... Z=25), C = Ciphertext, K = Kunci pergeseran.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Section: Contoh Perhitungan */}
          <Card className="bg-[#1E293B] border-[#14B8A6]/30 shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#F1F5F9]">Contoh Algoritma</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-400 leading-relaxed font-mono bg-[#0F172A] p-4 mx-6 mb-6 rounded-lg border border-slate-800">
              Teks asli: "HALO", Kunci: 3. <br/>
              H(7)+3=10(K) <br/>
              A(0)+3=3(D) <br/>
              L(11)+3=14(O) <br/>
              O(14)+3=17(R) <br/>
              Hasil: "KDOR"
            </CardContent>
          </Card>

        </div>
        
        {/* FOOTER CALL TO ACTION */}
        <div className="mt-16 mb-8 text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 to-transparent py-12 rounded-3xl border border-slate-800/50">
          <h3 className="text-2xl font-bold mb-4 text-[#F1F5F9]">Siap memecahkan kodenya?</h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">
            Teori tidak akan lengkap tanpa praktek. Uji coba algoritma Caesar secara real-time di Kalkulator Kriptografi kami.
          </p>
          <Link href="/calculator/caesar">
            <Button className="h-12 px-8 font-bold shadow-lg transition-all text-[#F1F5F9] bg-[#14B8A6] hover:bg-[#14B8A6]/80 border border-transparent">
              <Calculator className="w-5 h-5 mr-2" />
              Buka Kalkulator Caesar
            </Button>
          </Link>
        </div>

      </main>
    </div>
  )
}
