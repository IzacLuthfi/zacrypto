"use client";

import { useState } from "react";
import { otpCipher, generateRandomKey } from "@/lib/crypto/otp";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { RefreshCw, Info } from "lucide-react";

export default function OTPCalculator() {
  const [input, setInput] = useState("");
  const [key, setKey] = useState("");

  const encrypted = otpCipher(input, key);
  const decrypted = otpCipher(input, key, true);

  return (
    <div className="min-h-screen bg-[#0F172A] p-6 lg:p-12 text-slate-100">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-rose-400">One-Time Pad (Klasik)</h1>
          <p className="text-slate-400">Setiap karakter memiliki kunci acak unik yang hanya digunakan sekali.</p>
        </div>

        <Card className="bg-[#1E293B] border-slate-700">
          <CardContent className="pt-6 space-y-6">
            <div className="space-y-2">
              <Label className="text-slate-300">Plaintext (Huruf)</Label>
              <Textarea 
                value={input}
                onChange={(e) => setInput(e.target.value.toUpperCase().replace(/[^A-Z]/g, ""))}
                placeholder="CONTOH: INITEKSRAHASIA"
                className="bg-[#0F172A] border-slate-700 text-rose-100 font-bold tracking-widest"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label className="text-slate-300">Kunci (Huruf Acak)</Label>
                <Button 
                  onClick={() => setKey(generateRandomKey(input.length || 10))}
                  variant="ghost" size="sm" className="text-rose-400 hover:bg-rose-400/10 text-xs"
                >
                  <RefreshCw className="w-3 h-3 mr-2" /> Generate Key
                </Button>
              </div>
              <Textarea 
                value={key}
                onChange={(e) => setKey(e.target.value.toUpperCase().replace(/[^A-Z]/g, ""))}
                placeholder="Kunci harus sepanjang pesan..."
                className="bg-[#0F172A] border-slate-700 font-mono tracking-tighter"
              />
              {key && input && key.length < input.length && (
                <p className="text-[10px] text-amber-500 font-bold italic">Peringatan: Kunci lebih pendek dari pesan! (Tidak aman)</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* HASIL ENKRIPSI & DEKRIPSI SEPERTI TABEL DI GAMBAR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#1E293B] border-rose-500/30">
            <CardHeader className="bg-rose-500/5 border-b border-rose-500/10">
              <CardTitle className="text-xs text-rose-400 font-bold">CIPHERTEXT HASIL (ENKRIPSI)</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-[#0F172A] p-4 rounded-lg font-mono text-2xl text-center text-white break-all border border-slate-800 tracking-[0.2em]">
                {encrypted || "---"}
              </div>
              <p className="text-[10px] text-slate-500 mt-3 text-center tracking-tight">Rumus: (Plain + Key) mod 26</p>
            </CardContent>
          </Card>

          <Card className="bg-[#1E293B] border-emerald-500/30">
            <CardHeader className="bg-emerald-500/5 border-b border-emerald-500/10">
              <CardTitle className="text-xs text-emerald-400 font-bold">PLAINTEXT ASLI (DEKRIPSI)</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="bg-[#0F172A] p-4 rounded-lg font-mono text-2xl text-center text-white break-all border border-slate-800 tracking-[0.2em]">
                {decrypted || "---"}
              </div>
              <p className="text-[10px] text-slate-500 mt-3 text-center tracking-tight">Rumus: (Cipher - Key) mod 26</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl flex gap-3 items-start">
          <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-400 leading-relaxed">
            Sesuai aturan OTP klasik, setiap karakter pesan dijumlahkan dengan indeks kunci. <br/>
            Contoh: <span className="text-rose-300">I(8) + I(8) = 16(Q)</span>. Hasil enkripsi ini 100% mengikuti tabel referensi A=0 sampai Z=25.
          </p>
        </div>
      </div>
    </div>
  );
}