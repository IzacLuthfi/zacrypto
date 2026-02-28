import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Gamepad2, 
  Timer, 
  SearchCode, 
  Puzzle, 
  ShieldAlert,
  ArrowRight,
  Sparkles
} from 'lucide-react'

// Data Minigames
const minigames = [
  {
    id: 'hack-the-cipher',
    title: 'Hack the Cipher',
    description: 'Berpacu dengan waktu! Dekripsi pesan rahasia Caesar dan Vigenère sebelum bom waktu meledak. Cocok untuk melatih insting pergeseran hurufmu.',
    icon: Timer,
    difficulty: 'Mudah - Sedang',
    color: 'text-rose-400',
    bgColor: 'bg-rose-400/10',
    borderColor: 'hover:border-rose-500/50',
    shadow: 'hover:shadow-rose-500/20'
  },
  {
    id: 'guess-algorithm',
    title: 'Tebak Sandi',
    description: 'Diberikan Plaintext dan Ciphertext, mampukah kamu menebak algoritma apa yang digunakan? Perhatikan pola dan padding-nya!',
    icon: SearchCode,
    difficulty: 'Sedang',
    color: 'text-amber-400',
    bgColor: 'bg-amber-400/10',
    borderColor: 'hover:border-amber-500/50',
    shadow: 'hover:shadow-amber-500/20'
  },
  {
    id: 'cryptogram',
    title: 'Kriptogram Klasik',
    description: 'Pecahkan teka-teki kutipan tokoh terkenal. Tebak substitusi huruf yang benar di keyboard virtual hingga kalimatnya terbaca masuk akal.',
    icon: Puzzle,
    difficulty: 'Sedang - Sulit',
    color: 'text-[#10B981]', // Emerald
    bgColor: 'bg-[#10B981]/10',
    borderColor: 'hover:border-[#10B981]/50',
    shadow: 'hover:shadow-[#10B981]/20'
  },
  {
    id: 'secret-agent',
    title: 'Misi Agen Rahasia',
    description: 'Selesaikan jalan cerita epik! Retas radio musuh, buka koper rahasia, dan jinakkan bom dengan menggabungkan semua ilmu kriptografimu.',
    icon: ShieldAlert,
    difficulty: 'Expert',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'hover:border-purple-500/50',
    shadow: 'hover:shadow-purple-500/20',
    badge: '★ Rekomendasi'
  }
]

export default function MinigamesPage() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-[#F1F5F9] pb-20">
      
      {/* HEADER SECTION DENGAN EFEK GAMING (UNGU/PINK) */}
      <section className="relative pt-16 pb-12 px-6 overflow-hidden border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-purple-400 text-sm font-medium">
            <Gamepad2 className="w-4 h-4" />
            <span>Zona Bermain & Belajar</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Kriptografi <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-rose-400">Minigames</span>
          </h1>
          
          <p className="text-slate-400 max-w-2xl text-lg">
            Bosan membaca teori? Uji kecepatan, ketelitian, dan logikamu di zona permainan ini. Selesaikan misi dan jadilah Kriptografer Master!
          </p>
        </div>
      </section>

      {/* GRID DAFTAR GAME */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {minigames.map((game) => {
            const IconComponent = game.icon
            
            return (
              <Link href={`/minigames/${game.id}`} key={game.id} className="group outline-none">
                <Card className={`h-full bg-[#1E293B] border-slate-700/50 transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-black/40 relative overflow-hidden ${game.borderColor} ${game.shadow}`}>
                  
                  {/* Efek Garis Atas saat Hover */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity ${game.color}`}></div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      {/* Ikon Game */}
                      <div className={`w-14 h-14 rounded-xl border border-slate-700/50 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 ${game.bgColor} ${game.color}`}>
                        <IconComponent className="w-7 h-7" />
                      </div>
                      
                      {/* Badges */}
                      <div className="flex flex-col items-end gap-2">
                        {game.badge && (
                          <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-to-r from-purple-500 to-rose-500 text-white shadow-lg animate-pulse">
                            {game.badge}
                          </span>
                        )}
                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#0F172A] text-slate-300 border border-slate-700">
                          {game.difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <CardTitle className={`text-2xl text-[#F1F5F9] group-hover:${game.color.replace('text-', '')} transition-colors flex items-center gap-2`}>
                      {game.title}
                      <Sparkles className={`w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ${game.color}`} />
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="flex flex-col justify-between h-[calc(100%-110px)]">
                    <CardDescription className="text-slate-400 leading-relaxed mb-8 text-base">
                      {game.description}
                    </CardDescription>
                    
                    <div className={`flex items-center text-sm font-bold mt-auto w-fit transition-colors group-hover:gap-3 gap-2 border-b border-transparent group-hover:border-current pb-0.5 ${game.color}`}>
                      <span>Mainkan Sekarang</span>
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