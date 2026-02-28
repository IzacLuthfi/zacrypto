"use client";

import { useState } from "react";
import { caesarCipher } from "@/lib/crypto/caesar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Slider } from "@/components/ui/slider";
import { Info, Variable, Hash } from "lucide-react";

export default function CaesarCalculator() {
  const [input, setInput] = useState("");
  const [shift, setShift] = useState(3);

  const encrypted = caesarCipher(input, shift);
  const decrypted = caesarCipher(input, shift, true);

  return (
    <div className="min-h-screen bg-[#0F172A] p-6 lg:p-12 text-slate-100">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-bold text-[#14B8A6]">Kalkulator Caesar Cipher</h1>
          <p className="text-slate-400">Geser abjad untuk menyembunyikan pesan rahasiamu.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* KOLOM KIRI: INPUT & KONTROL */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-[#1E293B] border-slate-700 shadow-xl">
              <CardContent className="pt-6 space-y-6">
                <div className="space-y-2">
                  <Label className="text-slate-300 font-medium">Masukkan Pesan (Plaintext / Ciphertext)</Label>
                  <Textarea 
                    placeholder="Ketik pesan di sini..."
                    className="bg-[#0F172A] border-slate-700 text-white min-h-[120px] focus:ring-[#14B8A6]"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>

                <div className="space-y-4 bg-[#0F172A] p-4 rounded-xl border border-slate-800">
                  <div className="flex justify-between items-center">
                    <Label className="text-[#14B8A6] font-bold flex items-center gap-2">
                      <Hash className="w-4 h-4" /> Pergeseran (Shift): {shift}
                    </Label>
                    <span className="text-[10px] text-slate-500 font-mono uppercase tracking-tighter">A → {String.fromCharCode(65 + shift)}</span>
                  </div>
                  <Slider 
                    value={[shift]} 
                    max={25} 
                    step={1} 
                    onValueChange={(val) => setShift(val[0])}
                    className="py-2"
                  />
                </div>
              </CardContent>
            </Card>

            {/* HASIL */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-[#1E293B] border-[#14B8A6]/30 overflow-hidden">
                <div className="bg-[#14B8A6]/10 px-4 py-2 border-b border-[#14B8A6]/20 text-[10px] font-bold text-[#14B8A6] uppercase">Hasil Enkripsi (+{shift})</div>
                <CardContent className="p-4 font-mono break-all text-white bg-[#0F172A] m-3 rounded-lg min-h-[100px] flex items-center justify-center text-center">
                  {encrypted || <span className="text-slate-700 italic">Menunggu input...</span>}
                </CardContent>
              </Card>

              <Card className="bg-[#1E293B] border-rose-500/30 overflow-hidden">
                <div className="bg-rose-500/10 px-4 py-2 border-b border-rose-500/20 text-[10px] font-bold text-rose-400 uppercase">Hasil Dekripsi (-{shift})</div>
                <CardContent className="p-4 font-mono break-all text-white bg-[#0F172A] m-3 rounded-lg min-h-[100px] flex items-center justify-center text-center">
                  {decrypted || <span className="text-slate-700 italic">Menunggu input...</span>}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* KOLOM KANAN: PENJELASAN RUMUS */}
          <div className="space-y-6">
            <Card className="bg-[#1E293B] border-slate-700 shadow-xl overflow-hidden">
              <CardHeader className="bg-slate-800/50 border-b border-slate-700">
                <CardTitle className="text-sm flex items-center gap-2 text-slate-300">
                  <Variable className="w-4 h-4 text-[#14B8A6]" /> Dasar Matematika
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Rumus Enkripsi</p>
                  <div className="bg-[#0F172A] p-3 rounded-md border border-slate-800 text-center">
                    <code className="text-[#14B8A6] font-bold">C = (P + K) mod 26</code>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Rumus Dekripsi</p>
                  <div className="bg-[#0F172A] p-3 rounded-md border border-slate-800 text-center">
                    <code className="text-rose-400 font-bold">P = (C - K) mod 26</code>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-800">
                  <ul className="text-[11px] text-slate-400 space-y-2 leading-relaxed">
                    <li><b className="text-slate-200">P (Plaintext):</b> Indeks huruf asli</li>
                    <li><b className="text-slate-200">C (Ciphertext):</b> Indeks huruf hasil</li>
                    <li><b className="text-slate-200">K (Key):</b> Jumlah pergeseran (Shift)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1E293B] border-slate-700">
              <CardContent className="pt-6">
                <div className="flex gap-3 items-start">
                  <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-slate-400 leading-relaxed italic">
                    Setiap huruf dikonversi menjadi angka (A=0, B=1, ..., Z=25). Modulo 26 digunakan untuk memastikan hasil pergeseran tetap berada dalam rentang alfabet.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}