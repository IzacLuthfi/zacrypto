import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  BookOpen, 
  ArrowRight, 
  ShieldQuestion, 
  KeyRound, 
  Grid3X3, 
  Binary, 
  Fingerprint, 
  Cpu 
} from 'lucide-react'

// Kita buat data materinya dalam bentuk array agar kodenya rapi dan mudah ditambah
const materials = [
  {
    id: 'caesar',
    title: 'Caesar Cipher',
    description: 'Teknik substitusi tertua dan paling dasar. Pelajari bagaimana Julius Caesar menyembunyikan pesan militernya dengan pergeseran abjad.',
    icon: ShieldQuestion,
    difficulty: 'Dasar',
    color: 'text-[#14B8A6]', // Teal
    bgColor: 'bg-[#14B8A6]/10',
    borderColor: 'hover:border-[#14B8A6]/50',
    shadow: 'hover:shadow-[#14B8A6]/20'
  },
  {
    id: 'vigenere',
    title: 'Vigenère Cipher',
    description: 'Bapak dari sandi polialfabetik. Menggunakan kata kunci untuk membuat pergeseran Caesar yang berubah-ubah, sempat dianggap tak terpecahkan (Le Chiffre Indéchiffrable).',
    icon: KeyRound,
    difficulty: 'Menengah',
    color: 'text-[#0284C7]', // Blue
    bgColor: 'bg-[#0284C7]/10',
    borderColor: 'hover:border-[#0284C7]/50',
    shadow: 'hover:shadow-[#0284C7]/20'
  },
  {
    id: 'playfair',
    title: 'Playfair Cipher',
    description: 'Sandi digrafik (dua huruf sekaligus) pertama di dunia. Digunakan oleh pasukan Inggris pada Perang Dunia I karena cepat dan tanpa peralatan khusus.',
    icon: Grid3X3,
    difficulty: 'Menengah',
    color: 'text-[#10B981]', // Emerald
    bgColor: 'bg-[#10B981]/10',
    borderColor: 'hover:border-[#10B981]/50',
    shadow: 'hover:shadow-[#10B981]/20'
  },
  {
    id: 'hill',
    title: 'Hill Cipher',
    description: 'Membawa Aljabar Linear ke dalam Kriptografi. Menggunakan perkalian matriks untuk mengenkripsi beberapa huruf sekaligus.',
    icon: Binary,
    difficulty: 'Lanjut',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'hover:border-purple-500/50',
    shadow: 'hover:shadow-purple-500/20'
  },
  {
    id: 'otp',
    title: 'One-Time Pad (OTP)',
    description: 'Satu-satunya algoritma enkripsi yang secara matematis terbukti TIDAK BISA dipecahkan (perfect secrecy), dengan syarat kuncinya benar-benar acak.',
    icon: Fingerprint,
    difficulty: 'Lanjut',
    color: 'text-rose-400',
    bgColor: 'bg-rose-400/10',
    borderColor: 'hover:border-rose-500/50',
    shadow: 'hover:shadow-rose-500/20'
  },
  {
    id: 'enigma',
    title: 'Mesin Enigma',
    description: 'Mesin rotor elektromekanis legendaris Nazi Jerman. Pelajari bagaimana Alan Turing dan tim Bletchley Park memecahkannya.',
    icon: Cpu,
    difficulty: 'Expert',
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
    borderColor: 'hover:border-amber-500/50',
    shadow: 'hover:shadow-amber-500/20'
  }
]

export default function MaterialsPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F1F5F9] pb-20">
      
      {/* HEADER SECTION */}
      <section className="relative pt-16 pb-12 px-6 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#14B8A6]/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-[#14B8A6] text-sm font-medium">
            <BookOpen className="w-4 h-4" />
            <span>Pusat Pembelajaran</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Modul <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14B8A6] to-[#0284C7]">Kriptografi</span>
          </h1>
          
          <p className="text-slate-400 max-w-2xl text-lg">
            Pilih algoritma yang ingin kamu pelajari. Mulailah dari dasar sejarahnya, pahami teori matematikanya, hingga cara implementasinya.
          </p>
        </div>
      </section>

      {/* GRID MATERI */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {materials.map((modul) => {
            const IconComponent = modul.icon
            
            return (
              <Link href={`/materials/${modul.id}`} key={modul.id} className="group outline-none">
                <Card className={`h-full bg-[#1E293B] border-slate-700/50 transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-black/20 relative overflow-hidden ${modul.borderColor} ${modul.shadow}`}>
                  
                  {/* Efek Garis Atas saat Hover */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity ${modul.color}`}></div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      {/* Ikon Algoritma */}
                      <div className={`w-12 h-12 rounded-xl border border-slate-700/50 flex items-center justify-center transition-transform group-hover:scale-110 ${modul.bgColor} ${modul.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      
                      {/* Badge Tingkat Kesulitan */}
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {modul.difficulty}
                      </span>
                    </div>
                    
                    <CardTitle className="text-xl text-[#F1F5F9] group-hover:text-white transition-colors">
                      {modul.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex flex-col justify-between h-[calc(100%-100px)]">
                    <CardDescription className="text-slate-400 leading-relaxed mb-6">
                      {modul.description}
                    </CardDescription>
                    
                    <div className="flex items-center text-sm font-semibold mt-auto w-fit transition-colors group-hover:gap-3 gap-2 border-b border-transparent group-hover:border-current pb-0.5" style={{ color: 'inherit' }}>
                      <span className={modul.color}>Pelajari Modul</span>
                      <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${modul.color}`} />
                    </div>
                  </CardContent>

                </Card>
              </Link>
            )
          })}

        </div>
      </section>

    </div>
  )
}