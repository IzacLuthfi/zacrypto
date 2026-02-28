"use client";

import { useState } from "react";
import { vigenereCipher } from "@/lib/crypto/vigenere";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function VigenereCalculator() {
  const [input, setInput] = useState("");
  const [key, setKey] = useState("");

  const encrypted = vigenereCipher(input, key);
  const decrypted = vigenereCipher(input, key, true);

  return (
    <div className="min-h-screen bg-[#0F172A] p-6 lg:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-[#0284C7]">Kalkulator Vigenère Cipher</h1>
          <p className="text-slate-400">Gunakan kata kunci teks untuk enkripsi polialfabetik.</p>
        </div>

        <Card className="bg-[#1E293B] border-slate-700">
          <CardContent className="pt-6 space-y-6">
            {/* INPUT PESAN */}
            <div className="space-y-2">
              <Label className="text-slate-300">Pesan (Plaintext / Ciphertext)</Label>
              <Textarea 
                placeholder="Masukkan pesan di sini..."
                className="bg-[#0F172A] border-slate-700 text-white min-h-[120px]"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>

            {/* INPUT KUNCI */}
            <div className="space-y-2">
              <Label className="text-slate-300">Kata Kunci (Key)</Label>
              <Input 
                placeholder="Contoh: RAHASIA"
                className="bg-[#0F172A] border-slate-700 text-white"
                value={key}
                onChange={(e) => setKey(e.target.value.replace(/[^a-zA-Z]/g, ""))}
              />
              <p className="text-xs text-slate-500">Hanya karakter huruf yang diperbolehkan.</p>
            </div>
          </CardContent>
        </Card>

        {/* HASIL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#1E293B] border-[#0284C7]/30">
            <CardHeader><CardTitle className="text-sm text-[#0284C7]">HASIL ENKRIPSI</CardTitle></CardHeader>
            <CardContent className="font-mono break-all text-white bg-[#0F172A] m-4 p-4 rounded-lg min-h-[100px]">
              {encrypted || "Menunggu input..."}
            </CardContent>
          </Card>

          <Card className="bg-[#1E293B] border-rose-500/30">
            <CardHeader><CardTitle className="text-sm text-rose-400">HASIL DEKRIPSI</CardTitle></CardHeader>
            <CardContent className="font-mono break-all text-white bg-[#0F172A] m-4 p-4 rounded-lg min-h-[100px]">
              {decrypted || "Menunggu input..."}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}