"use client";

import { useState } from "react";
import { playfairCipher, preparePlayfairKey } from "@/lib/crypto/playfair";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function PlayfairCalculator() {
  const [input, setInput] = useState("");
  const [key, setKey] = useState("");

  const matrix = preparePlayfairKey(key || "KEYWORD");
  const result = playfairCipher(input, key);

  return (
    <div className="min-h-screen bg-[#0F172A] p-6 lg:p-12">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-[#10B981]">Kalkulator Playfair Cipher</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* SISI KIRI: INPUT */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-[#1E293B] border-slate-700">
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-2">
                  <Label className="text-slate-300">Kata Kunci (Key)</Label>
                  <Input 
                    value={key}
                    onChange={(e) => setKey(e.target.value.toUpperCase())}
                    className="bg-[#0F172A] border-slate-700 text-white font-bold"
                    placeholder="Contoh: MERDEKA"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-slate-300">Pesan</Label>
                  <Textarea 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="bg-[#0F172A] border-slate-700 text-white min-h-[150px]"
                    placeholder="Masukkan teks asli..."
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#1E293B] border-[#10B981]/30">
              <CardHeader><CardTitle className="text-sm text-[#10B981]">HASIL (DIGRAPH)</CardTitle></CardHeader>
              <CardContent className="font-mono text-xl tracking-widest text-white bg-[#0F172A] m-4 p-6 rounded-lg text-center">
                {result || "..."}
              </CardContent>
            </Card>
          </div>

          {/* SISI KANAN: VISUALISASI MATRIKS */}
          <div className="space-y-6">
            <Card className="bg-[#1E293B] border-slate-700">
              <CardHeader>
                <CardTitle className="text-sm text-center text-slate-400 uppercase tracking-tighter">Matriks 5x5 (Key Square)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-2">
                  {matrix.flat().map((char, i) => (
                    <div key={i} className="aspect-square flex items-center justify-center bg-[#0F172A] border border-slate-800 rounded text-[#10B981] font-bold text-lg">
                      {char}
                    </div>
                  ))}
                </div>
                <p className="text-[10px] text-slate-500 mt-4 text-center italic">*Huruf J digabung ke dalam huruf I</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}