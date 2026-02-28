import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Calculator, 
  ArrowRight, 
  Hash, 
  Layers, 
  Grid2X2, 
  Binary, 
  Zap, 
  Settings2 
} from 'lucide-react'

const calculatorMenus = [
  {
    id: 'caesar',
    title: 'Caesar Cipher',
    description: 'Enkripsi teks dengan menggeser posisi abjad berdasarkan angka kunci tertentu.',
    icon: Hash,
    color: 'text-[#14B8A6]',
    borderColor: 'hover:border-[#14B8A6]/50',
    shadow: 'hover:shadow-[#14B8A6]/20'
  },
  {
    id: 'vigenere',
    title: 'Vigenère Cipher',
    description: 'Gunakan kata kunci teks untuk melakukan enkripsi substitusi polialfabetik yang lebih kuat.',
    icon: Layers,
    color: 'text-[#0284C7]',
    borderColor: 'hover:border-[#0284C7]/50',
    shadow: 'hover:shadow-[#0284C7]/20'
  },
  {
    id: 'playfair',
    title: 'Playfair Cipher',
    description: 'Enkripsi pasangan huruf menggunakan sistem matriks 5x5 yang unik.',
    icon: Grid2X2,
    color: 'text-[#10B981]',
    borderColor: 'hover:border-[#10B981]/50',
    shadow: 'hover:shadow-[#10B981]/20'
  },
  {
    id: 'hill',
    title: 'Hill Cipher',
    description: 'Algoritma berbasis matriks aljabar linear. Masukkan matriks kunci untuk memproses pesan.',
    icon: Binary,
    color: 'text-purple-400',
    borderColor: 'hover:border-purple-500/50',
    shadow: 'hover:shadow-purple-500/20'
  },
  {
    id: 'otp',
    title: 'One-Time Pad',
    description: 'Enkripsi biner XOR dengan kunci acak untuk keamanan yang tidak dapat dipecahkan.',
    icon: Zap,
    color: 'text-rose-400',
    borderColor: 'hover:border-rose-500/50',
    shadow: 'hover:shadow-rose-500/20'
  },
  {
    id: 'enigma',
    title: 'Simulator Enigma',
    description: 'Simulasi mesin rotor legendaris. Atur posisi rotor dan mulailah mengetik pesan rahasia.',
    icon: Settings2,
    color: 'text-amber-400',
    borderColor: 'hover:border-amber-500/50',
    shadow: 'hover:shadow-amber-500/20'
  }
]

export default function CalculatorMainPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F1F5F9] pb-20">
      
      {/* HEADER SECTION */}
      <section className="relative pt-16 pb-12 px-6 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#0284C7]/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-[#0284C7] text-sm font-medium">
            <Calculator className="w-4 h-4" />
            <span>Alat Kriptografi Interaktif</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Kalkulator <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] to-[#14B8A6]">Enkripsi & Dekripsi</span>
          </h1>
          
          <p className="text-slate-400 max-w-2xl text-lg">
            Pilih algoritma di bawah ini untuk memulai simulasi. Masukkan pesanmu, atur kuncinya, dan lihat bagaimana teks aslimu berubah menjadi Ciphertext secara instan.
          </p>
        </div>
      </section>

      {/* GRID MENU KALKULATOR */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {calculatorMenus.map((item) => {
            const IconComponent = item.icon
            
            return (
              <Link href={`/calculator/${item.id}`} key={item.id} className="group outline-none">
                <Card className={`h-full bg-[#1E293B] border-slate-700/50 transition-all duration-300 hover:-translate-y-2 shadow-lg shadow-black/20 relative overflow-hidden ${item.borderColor} ${item.shadow}`}>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-[#0F172A] border border-slate-700/50 flex items-center justify-center transition-transform group-hover:scale-110 ${item.color}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <CardTitle className="text-xl text-[#F1F5F9] group-hover:text-white">
                        {item.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <CardDescription className="text-slate-400 leading-relaxed mb-6">
                      {item.description}
                    </CardDescription>
                    
                    <div className={`flex items-center gap-2 text-sm font-bold ${item.color} opacity-80 group-hover:opacity-100 transition-all`}>
                      Buka Kalkulator
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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