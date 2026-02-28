"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrainCircuit, CheckCircle2, XCircle, Trophy, ArrowRight, RefreshCcw, Loader2, Timer, AlertCircle, PlayCircle } from "lucide-react";

// BANK SOAL (25 Pertanyaan)
const allQuestions = [
  // --- CAESAR CIPHER ---
  { question: "Siapakah tokoh sejarah yang pertama kali tercatat menggunakan sandi pergeseran abjad untuk pesan militernya?", options: ["Alan Turing", "Julius Caesar", "Blaise de Vigenère", "Lord Playfair"], answer: 1, explanation: "Julius Caesar menggunakan sandi ini dengan pergeseran 3 langkah ke kiri untuk melindungi pesan militernya." },
  { question: "Caesar Cipher termasuk ke dalam kategori sandi apa?", options: ["Polialfabetik", "Asimetris", "Monoalfabetik", "Digrafik"], answer: 2, explanation: "Disebut monoalfabetik karena satu huruf asli selalu digantikan oleh satu huruf sandi yang sama secara konsisten." },
  { question: "Apa kelemahan utama dari Caesar Cipher?", options: ["Sangat rentan terhadap analisis frekuensi huruf", "Membutuhkan mesin khusus", "Kuncinya terlalu panjang", "Hanya bisa mengenkripsi angka"], answer: 0, explanation: "Karena pergeserannya tetap, frekuensi kemunculan huruf dalam bahasa (seperti 'A' atau 'E') akan langsung terlihat polanya." },
  { question: "Jika menggunakan algoritma Caesar Cipher dengan pergeseran (Key) = 3, huruf 'A' akan terenkripsi menjadi...", options: ["C", "D", "E", "Z"], answer: 1, explanation: "A (0) + 3 = 3 (D)." },
  { question: "Rumus matematis dasar untuk enkripsi Caesar Cipher adalah...", options: ["C = (P x K) mod 26", "C = P XOR K", "C = (P + K) mod 26", "C = (P - K) mod 26"], answer: 2, explanation: "P (Plaintext) ditambah K (Key), lalu di-modulo 26 agar tetap berada dalam batas 26 huruf alfabet." },

  // --- VIGENERE CIPHER ---
  { question: "Sandi Vigenère sempat dijuluki 'Le Chiffre Indéchiffrable' yang berarti...", options: ["Sandi para Raja", "Sandi yang tak terpecahkan", "Sandi angka acak", "Sandi polialfabetik pertama"], answer: 1, explanation: "Sandi ini tidak bisa dipecahkan selama 300 tahun sebelum akhirnya dipatahkan oleh Friedrich Kasiski." },
  { question: "Berbeda dengan Caesar, Vigenère Cipher menggunakan sederet huruf sebagai kunci. Ini membuatnya masuk ke kategori sandi...", options: ["Polialfabetik", "Monoalfabetik", "Digrafik", "Modern"], answer: 0, explanation: "Disebut polialfabetik karena satu huruf yang sama bisa dienkripsi menjadi huruf yang berbeda-beda tergantung posisi kata kuncinya." },
  { question: "Alat bantu berupa matriks 26x26 yang sering digunakan untuk mengenkripsi/mendekripsi Vigenère Cipher secara manual disebut...", options: ["Matriks Hill", "Bujursangkar Playfair", "Rotor Enigma", "Tabula Recta"], answer: 3, explanation: "Tabula Recta (atau bujursangkar Vigenère) memetakan persimpangan antara baris plaintext dan kolom kata kunci." },
  { question: "Metode analitik apa yang pertama kali sukses memecahkan Vigenère Cipher secara sistematis pada tahun 1863?", options: ["Metode Kasiski", "Metode Hill", "Metode Brute-force", "Metode Sarrus"], answer: 0, explanation: "Friedrich Kasiski menemukan cara memecahkan Vigenère dengan mencari jarak antara pola kata yang berulang untuk menebak panjang kunci." },
  { question: "Jika Plaintext 'A' dan Key 'B', maka hasil ciphertext Vigenère-nya adalah...", options: ["A", "B", "C", "Z"], answer: 1, explanation: "A(0) + B(1) = 1(B). Huruf A jika bertemu kunci apapun akan menghasilkan huruf kunci tersebut." },

  // --- PLAYFAIR CIPHER ---
  { question: "Berapa ukuran matriks standar yang digunakan dalam algoritma Playfair Cipher?", options: ["3x3", "4x4", "5x5", "6x6"], answer: 2, explanation: "Playfair menggunakan tabel bujursangkar 5x5 yang menampung 25 huruf." },
  { question: "Karena matriks Playfair hanya memiliki 25 kotak, dua huruf manakah yang biasanya digabungkan ke dalam satu kotak?", options: ["A dan B", "M dan N", "X dan Y", "I dan J"], answer: 3, explanation: "Huruf I dan J paling sering digabungkan karena kemiripannya secara linguistik." },
  { question: "Playfair Cipher tidak mengenkripsi huruf satu per satu, melainkan berpasangan. Istilah untuk ini adalah...", options: ["Monografik", "Digrafik", "Trigrafik", "Poligrafik"], answer: 1, explanation: "Sandi digrafik memproses dua huruf (sepasang) sekaligus, sehingga menghilangkan pola frekuensi huruf tunggal." },
  { question: "Meskipun dinamai Lord Playfair, siapa sebenarnya ilmuwan Inggris yang menciptakan sandi ini pada 1854?", options: ["Charles Wheatstone", "Alan Turing", "Lester S. Hill", "Friedrich Kasiski"], answer: 0, explanation: "Charles Wheatstone yang menemukannya, namun Lord Playfair yang mempromosikannya ke pemerintah Inggris." },
  { question: "Dalam Playfair, jika sepasang huruf berada di baris yang sama pada matriks, aturan pergeserannya adalah...", options: ["Geser ke bawah 1 kotak", "Ambil sudut persegi panjang", "Geser ke atas 1 kotak", "Geser ke kanan 1 kotak"], answer: 3, explanation: "Aturan Playfair: Baris sama -> Kanan, Kolom sama -> Bawah, Berbeda -> Sudut persegi." },

  // --- HILL CIPHER ---
  { question: "Cabang ilmu matematika apa yang menjadi tulang punggung dari algoritma Hill Cipher?", options: ["Kalkulus", "Aljabar Linear (Matriks)", "Trigonometri", "Geometri"], answer: 1, explanation: "Hill Cipher menggunakan perkalian matriks untuk mengenkripsi vektor huruf." },
  { question: "Apa syarat mutlak matriks kunci (Key Matrix) pada Hill Cipher agar pesannya bisa didekripsi?", options: ["Harus matriks identitas", "Determinannya harus nol", "Harus memiliki Invers Modulo 26", "Harus berukuran 5x5"], answer: 2, explanation: "Jika matriks tidak memiliki invers dalam modulo 26 (determinannya bukan relatif prima dengan 26), ciphertext tidak akan bisa dikembalikan menjadi plaintext." },
  { question: "Jika Hill Cipher menggunakan matriks berukuran 3x3, berapa huruf yang dienkripsi secara bersamaan dalam satu blok?", options: ["1 huruf", "2 huruf", "3 huruf", "9 huruf"], answer: 2, explanation: "Ukuran matriks menentukan ukuran blok vektor. Matriks 3x3 mengenkripsi 3 huruf sekaligus." },
  { question: "Siapakah matematikawan yang mempublikasikan Hill Cipher pada tahun 1929?", options: ["Blaise de Vigenère", "Charles Wheatstone", "Alan Turing", "Lester S. Hill"], answer: 3, explanation: "Lester S. Hill menerbitkan algoritma ini di jurnal American Mathematical Monthly." },
  { question: "Pada Hill Cipher, jika panjang pesan tidak habis dibagi dengan ukuran matriks, apa yang biasanya dilakukan?", options: ["Menghapus huruf terakhir", "Menambahkan huruf dummy (Padding) seperti 'X'", "Mengganti matriks kuncinya", "Membalikkan pesan"], answer: 1, explanation: "Padding ditambahkan di akhir pesan agar panjang teksnya pas dengan ukuran perkalian matriks." },

  // --- OTP & ENIGMA ---
  { question: "Satu-satunya algoritma enkripsi di dunia yang secara matematis terbukti TIDAK BISA dipecahkan (Perfect Secrecy) adalah...", options: ["AES-256", "Mesin Enigma", "One-Time Pad (OTP)", "Vigenère Cipher"], answer: 2, explanation: "OTP memberikan perfect secrecy mutlak sesuai teori Claude Shannon, asalkan syarat kuncinya terpenuhi." },
  { question: "Berikut ini adalah syarat wajib bagi kunci One-Time Pad, KECUALI...", options: ["Harus benar-benar acak", "Hanya boleh digunakan satu kali", "Sepanjang pesan asli", "Boleh digunakan ulang asal pengirimnya sama"], answer: 3, explanation: "Kunci OTP haram hukumnya digunakan lebih dari satu kali. Jika digunakan ulang, sandi ini menjadi sangat mudah diretas." },
  { question: "Dalam implementasi digital modern, operasi logika apa yang digunakan untuk menggabungkan Plaintext dan Key pada OTP?", options: ["AND", "OR", "XOR (Exclusive OR)", "NAND"], answer: 2, explanation: "XOR sangat ideal karena bersifat reversibel. (A XOR B) XOR B = A." },
  { question: "Apa nama mesin elektromekanis berbasis rotor yang digunakan militer Jerman pada Perang Dunia II?", options: ["Bombe", "Enigma", "Lorenz", "Colossus"], answer: 1, explanation: "Enigma adalah mesin enkripsi taktis utama militer Jerman Nazi." },
  { question: "Siapa ilmuwan komputer jenius yang memimpin tim Bletchley Park memecahkan mesin Enigma?", options: ["Alan Turing", "Charles Babbage", "Lester S. Hill", "Claude Shannon"], answer: 0, explanation: "Alan Turing merancang mesin 'Bombe' untuk memecahkan setting harian Enigma secara otomatis." }
];

const shuffleArray = (array: any[]) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export default function QuizPage() {
  // States
  const [quizStarted, setQuizStarted] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<any[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);

  // Load pertanyaan saat pertama kali
  useEffect(() => {
    setActiveQuestions(shuffleArray(allQuestions).slice(0, 5));
  }, []);

  // Timer Logic
  useEffect(() => {
    if (quizStarted && !isAnswered && !showResult && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0 && !isAnswered) {
      // WAKTU HABIS! Otomatis salahkan jawaban.
      setIsAnswered(true);
      setSelectedOpt(-1); // -1 artinya tidak ada yang dipilih tapi waktu habis
    }
  }, [quizStarted, isAnswered, showResult, timeLeft]);

  const startQuiz = () => {
    setQuizStarted(true);
    setTimeLeft(20);
  };

  const handleAnswer = (index: number) => {
    if (isAnswered) return;
    setSelectedOpt(index);
    setIsAnswered(true);

    if (index === activeQuestions[currentQ].answer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < activeQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedOpt(null);
      setIsAnswered(false);
      setTimeLeft(20); // Reset timer untuk soal berikutnya
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setActiveQuestions(shuffleArray(allQuestions).slice(0, 5));
    setCurrentQ(0);
    setScore(0);
    setShowResult(false);
    setSelectedOpt(null);
    setIsAnswered(false);
    setQuizStarted(false); // Kembalikan ke halaman landing
  };

  if (activeQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-[#0F172A] flex items-center justify-center text-slate-300 gap-3">
        <Loader2 className="w-6 h-6 animate-spin text-[#10B981]" />
        Memuat Sistem Kuis...
      </div>
    );
  }

  // --- HALAMAN LANDING (BELUM MULAI) ---
  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-[#0F172A] p-6 flex flex-col items-center justify-center text-slate-100">
        <Card className="max-w-xl w-full bg-[#1E293B] border-slate-700 shadow-2xl text-center py-12 px-6">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
            <BrainCircuit className="w-10 h-10 text-emerald-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#10B981] to-[#0284C7] mb-4">
            Ujian Kriptografi
          </h1>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Kamu akan menghadapi <strong>5 pertanyaan acak</strong> seputar algoritma klasik. 
            Perhatian: Setiap pertanyaan memiliki batas waktu <strong>20 detik</strong>. Pastikan fokusmu penuh sebelum memulai!
          </p>
          <Button onClick={startQuiz} className="bg-[#10B981] hover:bg-[#10B981]/80 text-slate-950 font-bold px-8 h-12 text-lg w-full md:w-auto shadow-lg shadow-emerald-500/20">
            <PlayCircle className="w-5 h-5 mr-2" /> Mulai Kuis Sekarang
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F172A] p-6 lg:p-12 text-slate-100 flex flex-col items-center">
      <div className="w-full max-w-3xl">
        {!showResult ? (
          <Card className="bg-[#1E293B] border-slate-700 shadow-2xl">
            <CardHeader className="border-b border-slate-800 pb-4">
              <div className="flex justify-between items-center text-sm font-bold">
                <span className="text-slate-400">Pertanyaan {currentQ + 1} / {activeQuestions.length}</span>
                
                {/* TIMER UI */}
                <div className={`flex items-center gap-2 font-mono text-lg px-3 py-1 rounded-md border ${timeLeft <= 5 ? 'bg-rose-500/10 text-rose-500 border-rose-500/30 animate-pulse' : 'bg-[#0F172A] text-amber-400 border-slate-700'}`}>
                  <Timer className="w-4 h-4" /> 
                  00:{timeLeft.toString().padStart(2, '0')}
                </div>
              </div>
              
              <div className="w-full bg-slate-800 h-2 rounded-full mt-4 overflow-hidden">
                <div 
                  className="bg-[#10B981] h-full transition-all duration-300" 
                  style={{ width: `${((currentQ + 1) / activeQuestions.length) * 100}%` }}
                ></div>
              </div>
            </CardHeader>

            <CardContent className="pt-8 space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
                {activeQuestions[currentQ].question}
              </h2>

              <div className="space-y-3">
                {activeQuestions[currentQ].options.map((option: string, index: number) => {
                  let btnColor = "bg-[#0F172A] border-slate-700 hover:border-[#10B981]/50 text-slate-300 hover:bg-[#0F172A]/80";
                  let Icon = null;

                  if (isAnswered) {
                    if (index === activeQuestions[currentQ].answer) {
                      btnColor = "bg-emerald-500/20 border-emerald-500 text-emerald-400"; // Selalu tunjukkan jawaban benar
                      Icon = <CheckCircle2 className="w-5 h-5" />;
                    } else if (index === selectedOpt) {
                      btnColor = "bg-rose-500/20 border-rose-500 text-rose-400"; // Jika user salah pilih
                      Icon = <XCircle className="w-5 h-5" />;
                    } else {
                      btnColor = "bg-[#0F172A] border-slate-800 text-slate-600 opacity-50"; // Opsi lain meredup
                    }
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={isAnswered}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all flex justify-between items-center group ${btnColor}`}
                    >
                      <span className="font-medium">{option}</span>
                      {Icon}
                    </button>
                  );
                })}
              </div>

              {/* Tampilkan Penjelasan jika sudah dijawab atau waktu habis */}
              {isAnswered && (
                <div className={`mt-6 p-4 border rounded-lg animate-in fade-in slide-in-from-bottom-2 ${timeLeft === 0 ? 'bg-rose-500/10 border-rose-500/20' : 'bg-blue-500/10 border-blue-500/20'}`}>
                  {timeLeft === 0 && (
                    <p className="text-rose-400 font-bold mb-2 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4"/> Waktu Habis!
                    </p>
                  )}
                  <p className={`text-sm leading-relaxed ${timeLeft === 0 ? 'text-rose-200' : 'text-blue-300'}`}>
                    <span className="font-bold">Penjelasan:</span> {activeQuestions[currentQ].explanation}
                  </p>
                </div>
              )}
            </CardContent>

            <CardFooter className="bg-slate-800/30 border-t border-slate-800 p-6 flex justify-end">
              <Button 
                onClick={handleNext} 
                disabled={!isAnswered}
                className="bg-[#10B981] hover:bg-[#10B981]/80 text-slate-950 font-bold px-8"
              >
                {currentQ === activeQuestions.length - 1 ? "Lihat Hasil Akhir" : "Selanjutnya"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        ) : (
          /* TAMPILAN HASIL AKHIR */
          <Card className="bg-[#1E293B] border-slate-700 shadow-2xl text-center py-12">
            <CardContent className="space-y-6 flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(251,191,36,0.3)] mb-4">
                <Trophy className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">Kuis Selesai!</h2>
              <p className="text-slate-400 text-lg">
                Skor Akhir: <strong className="text-[#10B981]">{score}</strong> dari <strong className="text-white">{activeQuestions.length}</strong>
              </p>
              
              <div className="pt-8 flex flex-col sm:flex-row gap-4 w-full justify-center">
                <Button onClick={restartQuiz} variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800">
                  <RefreshCcw className="w-4 h-4 mr-2" /> Mainkan Kuis Baru
                </Button>
                <Link href="/materials">
                  <Button className="bg-[#0284C7] hover:bg-[#0284C7]/80 text-white w-full sm:w-auto">
                    Kembali ke Materi
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}