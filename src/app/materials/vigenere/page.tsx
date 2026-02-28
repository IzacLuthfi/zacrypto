import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Calculator, BookOpen, History, FunctionSquare, Binary, KeyRound } from 'lucide-react'

export default function VigenereMaterialPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F1F5F9] pb-20">
      
      <div className="border-b border-slate-800 bg-[#0F172A]/50 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/materials" className="flex items-center gap-2 text-sm font-semibold text-slate-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Kembali ke Modul
          </Link>
          <Link href="/calculator/vigenere">
            <Button variant="outline" size="sm" className="border-slate-700 bg-transparent hover:bg-[#0284C7]/10 text-[#0284C7] flex items-center gap-2">
              <Calculator className="w-4 h-4" /> <span className="hidden sm:inline">Coba Kalkulator</span>
            </Button>
          </Link>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 pt-12">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-slate-800/50 border border-slate-700 text-sm font-medium">
            <KeyRound className="w-4 h-4 text-[#0284C7]" />
            <span className="text-slate-300">Modul Pembelajaran</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#0284C7]">Vigenère Cipher</h1>
          <p className="text-xl text-slate-400">Sandi Polialfabetik yang Tak Terpecahkan</p>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#1E293B] border-[#0284C7]/30 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#F1F5F9]">
                  <History className="w-5 h-5 text-[#0284C7]" /> Sejarah Singkat
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400 leading-relaxed">
                Dideskripsikan pertama kali oleh Giovan Battista Bellaso pada abad ke-16, namun secara keliru dikaitkan dengan Blaise de Vigenère. Selama lebih dari 300 tahun, algoritma ini dianggap "le chiffre indéchiffrable" (sandi yang tak dapat dipecahkan) sampai Friedrich Kasiski mempublikasikan metode pemecahannya pada tahun 1863.
              </CardContent>
            </Card>

            <Card className="bg-[#1E293B] border-[#0284C7]/30 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-[#F1F5F9]">
                  <BookOpen className="w-5 h-5 text-[#0284C7]" /> Konsep Dasar
                </CardTitle>
              </CardHeader>
              <CardContent className="text-slate-400 leading-relaxed">
                Berbeda dengan Caesar yang hanya menggeser dengan satu angka tetap, Vigenère menggunakan sederet angka (kata kunci) yang diulang-ulang. Ini mengaburkan frekuensi kemunculan huruf, membuat teknik analisis frekuensi klasik menjadi tidak berguna.
              </CardContent>
            </Card>
          </div>

          <Card className="bg-[#1E293B] border-[#0284C7]/30 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[#F1F5F9]">
                <FunctionSquare className="w-5 h-5 text-[#0284C7]" /> Rumus Matematika
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0F172A] p-4 rounded-lg border border-slate-800">
                  <p className="text-sm text-slate-500 font-semibold mb-2 uppercase tracking-wider">Enkripsi</p>
                  <p className="font-mono text-lg font-bold tracking-widest text-[#0284C7]">C_i = (P_i + K_i) mod 26</p>
                </div>
                <div className="bg-[#0F172A] p-4 rounded-lg border border-slate-800">
                  <p className="text-sm text-slate-500 font-semibold mb-2 uppercase tracking-wider">Dekripsi</p>
                  <p className="font-mono text-lg font-bold tracking-widest text-[#0284C7]">P_i = (C_i - K_i + 26) mod 26</p>
                </div>
              </div>
              <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/50 flex gap-3 items-start">
                <Binary className="w-5 h-5 mt-0.5 shrink-0 text-[#0284C7]" />
                <p className="text-sm text-slate-400 leading-relaxed">
                  <span className="font-semibold text-slate-300">Catatan Matematis:</span> Subskrip "i" menunjukkan posisi huruf ke-i pada pesan dan kata kunci yang sudah diulang hingga sepanjang pesan asli.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#1E293B] border-[#0284C7]/30 shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#F1F5F9]">Contoh Algoritma</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-400 leading-relaxed font-mono bg-[#0F172A] p-4 mx-6 mb-6 rounded-lg border border-slate-800">
              Teks asli: "SERANG" <br/>
              Kunci asli: "KODE" <br/>
              Kunci diulang: "KODEKO" <br/><br/>
              S(18)+K(10) mod 26 = C(2) <br/>
              E(4)+O(14) mod 26 = S(18) <br/>
              Hasil: "CS..."
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 mb-8 text-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/40 to-transparent py-12 rounded-3xl border border-slate-800/50">
          <h3 className="text-2xl font-bold mb-4 text-[#F1F5F9]">Siap memecahkan kodenya?</h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto">Teori tidak akan lengkap tanpa praktek. Uji coba algoritma Vigenère secara real-time.</p>
          <Link href="/calculator/vigenere">
            <Button className="h-12 px-8 font-bold shadow-lg transition-all text-[#F1F5F9] bg-[#0284C7] hover:bg-[#0284C7]/80">
              <Calculator className="w-5 h-5 mr-2" /> Buka Kalkulator Vigenère
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}